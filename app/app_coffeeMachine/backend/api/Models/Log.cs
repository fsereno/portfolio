using System;
using System.Collections;
using System.Collections.Generic;

namespace Portfolio.CoffeeMachine.Models
{
    public class Log : IEnumerable
    {
        private List<LogItem> _log;

        public Log()
        {
            _log = new List<LogItem>();
        }

        public List<LogItem> Get()
        {
            var log = new List<LogItem>();
            foreach(var item in _log)
            {
                log.Add(item);
            }
            return log;
        }

        public int Count()
        {
            return _log.Count;
        }

        public void Add(LogItem logItem)
        {
           _log.Add(logItem);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return (IEnumerator) GetEnumerator();
        }

        public LogEnumerator GetEnumerator()
        {
            return new LogEnumerator(_log);
        }

        public class LogEnumerator : IEnumerator
        {
            private int _position = -1;
            private List<LogItem> _log;
            public LogEnumerator(List<LogItem> log)
            {
                _log = log;
            }

            public bool MoveNext()
            {
                _position++;
                return (_position < _log.Count);
            }

            public void Reset()
            {
                _position = -1;
            }

            object IEnumerator.Current
            {
                get
                {
                    return Current;
                }
            }

            public LogItem Current
            {
                get
                {
                    try
                    {
                        return _log[_position];
                    }
                    catch (IndexOutOfRangeException)
                    {
                        throw new InvalidOperationException();
                    }
                }
            }
        }
    }
}