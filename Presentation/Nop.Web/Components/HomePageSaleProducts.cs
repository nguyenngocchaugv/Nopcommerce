using Microsoft.AspNetCore.Mvc;
using Nop.Services.Catalog;
using Nop.Web.Factories;
using Nop.Web.Framework.Components;
using Nop.Web.Models.Catalog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nop.Web.Components
{
    public class HomePageSaleProducts: NopViewComponent
    {
        private readonly IProductService _productService;
        private readonly IProductModelFactory _productModelFactory;

        public HomePageSaleProducts(IProductService productService, IProductModelFactory productModelFactory)
        {
            this._productService = productService;
            this._productModelFactory = productModelFactory;
        }

        public IViewComponentResult Invoke()
        {
            var products = _productService.SearchProducts().Where(x => x.OldPrice > x.Price 
           && x.AvailableEndDateTimeUtc - DateTime.Now > new TimeSpan(0)).ToList();
            var model = new List<ProductDetailsModel>();
            if (!products.Any())
                return Content("");
            foreach(var product in products)
            {
                model.Add(_productModelFactory.PrepareProductDetailsModel(product, null, false));
            }
            //var model = _productModelFactory.PrepareProductOverviewModels(products, true, true).ToList();

            return View(model);
        }
    }
}
