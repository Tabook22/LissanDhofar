﻿using System.Web;
using System.Web.Mvc;

namespace LissanDhofar_V1
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
