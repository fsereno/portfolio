using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Interfaces;
using Models;

namespace Utils
{
    public class CoffeeMakerUtil : ITaskRunner
    {
        private List<Instruction> log { get; set; }

        public List<Instruction> Run()
        {
            this.log = new List<Instruction>();

            this.Start("boiling the kettle", 3000);
            this.Do("get coffee from cupboard");
            this.Do("pack coffee into cafetiere");
            this.Do("get cup from cupboard");
            this.Do("get milk from fridge");
            this.Do("pour milk into cup");
            this.Do("put cup in microwave");
            this.Start("microwaving cup", 3500);
            this.Do("pour boiling water into cafetiere");
            this.Do("brew the coffee");
            this.Do("get cup from microwave");
            this.Do("plunge cafetiere");
            this.Do("pour coffee into cup");
            this.Do("stir coffee");
            this.Do("drink coffee");

            return this.log;
        }

        public async Task<List<Instruction>> RunAsync()
        {
            this.log = new List<Instruction>(); // instead of returning a flat log, how about a log and hide the list using enumerators ?

            var boilingWaterTask = this.StartAsync("boiling the kettle", 3000);
            this.Do("get coffee from cupboard");
            this.Do("pack coffee into cafetiere");
            this.Do("get cup from cupboard");
            this.Do("get milk from fridge");
            this.Do("pour milk into cup");
            this.Do("put cup in microwave");
            var microwavingCupTask = this.StartAsync("microwaving cup", 3500);
            var waterBoild = await boilingWaterTask;
            this.Do("pour boiling water into cafetiere");
            this.Do("brew the coffee");
            var cupMicrowaved = await microwavingCupTask;
            this.Do("get cup from microwave");
            this.Do("plunge cafetiere");
            this.Do("pour coffee into cup");
            this.Do("stir coffee");
            this.Do("drink coffee");

            return this.log;
        }

        public async Task<bool> StartAsync(string instruction, int seconds = 500)
        {
            this.log.Add(new Instruction($"Start {instruction.ToLower()}", Thread.CurrentThread.ManagedThreadId));
            await Task.Delay(seconds);
            this.log.Add(new Instruction($"Finished {instruction.ToLower()}", Thread.CurrentThread.ManagedThreadId));
            return true;
        }

        public void Start(string instruction, int seconds = 500)
        {
            this.log.Add(new Instruction($"Start {instruction.ToLower()}", Thread.CurrentThread.ManagedThreadId));
            Thread.Sleep(seconds);
            this.log.Add(new Instruction($"Finished {instruction.ToLower()}", Thread.CurrentThread.ManagedThreadId));
        }

        public void Do(string instruction)
        {
            var detail = char.ToUpper(instruction[0])+instruction.Substring(1);
            this.log.Add(new Instruction(detail, Thread.CurrentThread.ManagedThreadId));
        }
    }
}