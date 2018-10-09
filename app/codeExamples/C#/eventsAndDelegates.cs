using System;
using System.Threading;

namespace CodeExamples.EventsAndDelegates.HeatingSystem {
	public class Instruction {
		public DateTime StartTime;
        public DateTime EndTime;
        public int Degrees; 
        public Instruction(
            DateTime startTime,
            DateTime endTime,
            int degrees
        ){
            this.StartTime = startTime;
            this.EndTime = endTime;
            this.Degrees = degrees;
        }
	}

	public class HeatingController {
		
		public delegate void HeatingControllerEngagedEventHandler(object source, EventArgs args);
		public event HeatingControllerEngagedEventHandler HeatingEngaged;

		public void Engage (Instruction instruction) 
		{
			Console.WriteLine("Engage Heating...");
			Thread.Sleep(3000);
			OnHeatingEngaged();
		}

		protected virtual void OnHeatingEngaged()
		{
			if(HeatingEngaged != null){
				HeatingEngaged(this, EventArgs.Empty);
			}
		}
	}	
}

namespace CodeExamples.EventsAndDelegates.Services {
	public class MailService 
	{
		public void OnHeatingEngaged(object source, EventArgs e)
		{
			// MailService OnHeatingEngaged specific code here
			System.Console.WriteLine("MailService sending an email...");
		}
	}

	public class MessageService
	{
		public void OnHeatingEngaged(object source, EventArgs e)
		{
			// MessageService OnHeatingEngaged specific code here
			System.Console.WriteLine("MessageService sending a text message...");
		}
	}
}

namespace CodeExamples.EventsAndDelegates.Programe {
	public class Programe {
		public void Main(){
			
			var instruction = new CodeExamples.EventsAndDelegates.HeatingSystem.Instruction(
                new DateTime(),
                new DateTime(),
                21
            );

			var heatingController = new CodeExamples.EventsAndDelegates.HeatingSystem.HeatingController(); // Publisher
			var mailService = new CodeExamples.EventsAndDelegates.Services.MailService(); // Subscriber
			var messageService = new CodeExamples.EventsAndDelegates.Services.MessageService(); // Subscriber

			// Pointers / Subscribe to the Event
			heatingController.HeatingEngaged += mailService.OnHeatingEngaged;
			heatingController.HeatingEngaged += messageService.OnHeatingEngaged;

			// Envoke the Encode method
 			heatingController.Engage(instruction);
			Console.WriteLine("Process Complete, heating engaged!");
            System.Console.WriteLine("Your heating will start at {0}", instruction.StartTime);
            System.Console.WriteLine("Your heating will end at {0}", instruction.EndTime);
            System.Console.WriteLine("Your heating will be at a temperature of {0} degrees", instruction.Degrees);
		}
	}
}