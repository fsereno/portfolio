using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Utils;
using Models;

namespace aws.Controllers
{
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private List<Item> _items { get; set; }
        private readonly IBasketUtil _basketUtil;

        public BasketController(IBasketUtil basketUtil)
        {
            this._items = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" }
            };
           this._basketUtil = basketUtil;
        }

        [HttpPost("get")]
        public IList<Item> Get([FromBody]GetRequest request)
        {
            this.SetResponseHeaders();
            var result = new List<Item>();

            if (request != null)
            {
                try
                {
                    var items = this._basketUtil.GetItems(request.Items, this._items);
                    var isInRange = this._basketUtil.TryRange(request.Index, items, out int position);
                    if (isInRange)
                    {
                        result.Add(items[position]);
                    }
                    result = result.Any() ? result : items;
                }
                catch (Exception exception)
                {
                    throw new Exception($"Unable to retrieve items: {exception.Message}");
                }
            }
            return result;
        }

        [HttpPost("add")]
        public IList<Item> Add([FromBody]AddRequest request)
        {
            this.SetResponseHeaders();
            var result = new List<Item>();

            if (request != null && !String.IsNullOrEmpty(request.Item?.Name))
            {
                try
                {
                    var items = this._basketUtil.GetItems(request.Items, this._items);
                    items.Add(request.Item);
                    result = items;
                }
                catch (Exception exception)
                {
                    throw new Exception($"Unable to add item: {exception.Message}");
                }
            }
            return result;
        }

        [HttpPost("update")]
        public IList<Item> Update([FromBody]UpdateRequest request)
        {
            this.SetResponseHeaders();
            var result = new List<Item>();

            if (request != null)
            {
                try
                {
                    var items = this._basketUtil.GetItems(request.Items, this._items);
                    var isInRange = this._basketUtil.TryRange(request.Index, items, out int position);
                    if (isInRange) {
                        items[position] = request.Item;
                    }
                    result = items;
                }
                catch (Exception exception)
                {
                    throw new Exception($"Unable to update item: {exception.Message}");
                }
            }
            return result;
        }

        // DELETE api/basket/delete
        [HttpPost("delete")]
        public IList<Item> Delete([FromBody]GetRequest request)
        {
            this.SetResponseHeaders();
            var result = new List<Item>();

            if (request != null)
            {
                try
                {
                    var items = this._basketUtil.GetItems(request.Items, this._items);
                    var isInRange = this._basketUtil.TryRange(request.Index, items, out int position);
                    if (isInRange)
                    {
                        items.RemoveAt(position);
                    }
                    result = items;
                }
                catch(Exception exception)
                {
                    throw new Exception($"Unable to delete item: {exception.Message}");
                }
            }
            return result;
        }

        private void SetResponseHeaders() {
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}