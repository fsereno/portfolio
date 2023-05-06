# .NET Asynchronous Coffee Maker

This application demonstrates knowledge of multithreading with use of the async, await, Task and the State Machine. The process of making a cup of coffee can be either run synchronously or asynchronously. The order in which the steps are carried out depends on available threads. Synchronously, with only a single thread, every task must finish before the next. Asynchronously, we are able to run background tasks, such as boiling the kettle while we get cups out of a cupboard using multiple threads.

Each step is entered into a Log, which is updated by reference during the process. I have also implemented IEnumerable and IEnumorator to demonstrate the iterator pattern. Keeping the Log structure hidden and allowing indirect, readonly iteration of the Log collection.

- IEnumerable (https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=netcore-3.1)

- IEnumorator (https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerator?view=netcore-3.1)