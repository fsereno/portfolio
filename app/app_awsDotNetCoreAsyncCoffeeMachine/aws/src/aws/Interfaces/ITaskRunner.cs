using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

/* processes to making coffee
1. Put the kettle on (async)
2. Get coffee from cupboard
3. Pack coffee into cafetiere
4. Get cup from cupboard
5. Get milk from fridge
6. Pour milk into cup
7. Put cup in microwave
8. Turn on microwave (async)
5. Pour boiling water into cafetiere (Kettle has finished)
6. Leave coffee to brew (async)
7. Get cup from microwave (Microwave has finished)
8. Plunge cafetiere
9. Pour coffee into cup
10. Stir well
11. Enjoy!
*/

namespace Interfaces
{
    public interface ITaskRunner
    {
        List<Instruction> Run();
        Task<List<Instruction>> RunAsync();
        void Do(string instruction);
        void Start(string instruction, int seconds);
        Task<bool> StartAsync(string instruction, int seconds);
    }
}
