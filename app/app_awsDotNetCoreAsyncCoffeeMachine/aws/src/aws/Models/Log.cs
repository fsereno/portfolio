using System;
using System.Collections;
using System.Collections.Generic;

namespace Models
{
    public class Log : IEnumerable
    {
        private List<Instruction> _log;

        public Log()
        {
            this._log = new List<Instruction>();
        }

        public List<Instruction> Get()
        {
            var log = new List<Instruction>();
            foreach(var item in _log)
            {
                log.Add(item);
            }
            return log;
        }

        public void Add(Instruction instruction)
        {
           this._log.Add(instruction);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return (IEnumerator) GetEnumerator();
        }

        public LogEnum GetEnumerator()
        {
            return new LogEnum(_log);
        }

        public class LogEnum : IEnumerator
        {
            private int _position = -1;
            private List<Instruction> _log;

            public LogEnum(List<Instruction> log)
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

            public Instruction Current
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