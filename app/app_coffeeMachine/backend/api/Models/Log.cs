using System;
using System.Collections;
using System.Collections.Generic;

namespace Portfolio.CoffeeMachine.Models
{
    /// <summary>
    /// Represents a log of coffee machine activities.
    /// </summary>
    public class Log : IEnumerable
    {
        private List<LogItem> _log;

        /// <summary>
        /// Initializes a new instance of the Log class.
        /// </summary>
        public Log()
        {
            _log = new List<LogItem>();
        }

        /// <summary>
        /// Gets the log items in the log.
        /// </summary>
        /// <returns>A list of log items.</returns>
        public List<LogItem> Get()
        {
            var log = new List<LogItem>();
            foreach(var item in _log)
            {
                log.Add(item);
            }
            return log;
        }

        /// <summary>
        /// Gets the number of log items in the log.
        /// </summary>
        /// <returns>The number of log items.</returns>
        public int Count()
        {
            return _log.Count;
        }

        /// <summary>
        /// Adds a log item to the log.
        /// </summary>
        /// <param name="logItem">The log item to add.</param>
        public void Add(LogItem logItem)
        {
           _log.Add(logItem);
        }

        /// <summary>
        /// Returns an enumerator that iterates through the log.
        /// </summary>
        /// <returns>An enumerator for the log.</returns>
        IEnumerator IEnumerable.GetEnumerator()
        {
            return (IEnumerator) GetEnumerator();
        }

        /// <summary>
        /// Returns an enumerator that iterates through the log.
        /// </summary>
        /// <returns>An enumerator for the log.</returns>
        public LogEnumerator GetEnumerator()
        {
            return new LogEnumerator(_log);
        }

        /// <summary>
        /// Represents an enumerator for the Log class.
        /// </summary>
        public class LogEnumerator : IEnumerator
        {
            private int _position = -1;
            private List<LogItem> _log;

            /// <summary>
            /// Initializes a new instance of the LogEnumerator class with the specified log.
            /// </summary>
            /// <param name="log">The log to enumerate.</param>
            public LogEnumerator(List<LogItem> log)
            {
                _log = log;
            }

            /// <summary>
            /// Advances the enumerator to the next log item.
            /// </summary>
            /// <returns>true if the enumerator was successfully advanced to the next log item; false if the enumerator has reached the end of the log.</returns>
            public bool MoveNext()
            {
                _position++;
                return (_position < _log.Count);
            }

            /// <summary>
            /// Resets the enumerator to its initial position, before the first log item.
            /// </summary>
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

            /// <summary>
            /// Gets the current log item in the log.
            /// </summary>
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