using System.Web;
using System.Web.Optimization;

namespace LissanDhofar_V1
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/Vendors/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/vendors").Include(
               "~/Scripts/AngularjsCore/angular.js",
               "~/Scripts/Vendors/angular-animate.js",
               "~/Scripts/Vendors/angular-sanitize.js",
               "~/Scripts/Vendors/jquery-1.10.2.js",
               "~/Scripts/Vendors/bootstrap.js",
               "~/Scripts/Vendors/angular-ui-router.js",
               "~/Scripts/Vendors/ng-file-upload.js",
               "~/Scripts/Vendors/angular-ui/ui-bootstrap.js",
               "~/Scripts/Vendors/ng-file-upload-shim.js",
               "~/Scripts/Vendors/ng-file-upload.js",
               "~/Scripts/Vendors/dirPagination.js",
               "~/Scripts/Vendors/angular-messages.js",
               "~/Scripts/Vendors/ui-tinymce.js",
               "~/Scripts/Vendors/dropzone/dropzone.js",
               "~/Scripts/Vendors/ng-dropzone.min.js",
               "~/Scripts/Vendors/owl.carousel.min.js",
               "~/Scripts/Vendors/jquery.nav.js",
               "~/Scripts/Vendors/jquery.sticky.js",
               "~/Scripts/Vendors/plugins.js",
               "~/Scripts/Vendors/wow.min.js",
               "~/Scripts/Vendors/js/main.js"

               ));

            bundles.Add(new ScriptBundle("~/bundles/spa").Include(
               "~/Scripts/spa/app.js",
               "~/Scripts/spa/home/indexServ.js",
               "~/Scripts/spa/home/indexCtrl.js",
               "~/Scripts/SPA/UploadFiles/uploadFileServ.js",
               "~/Scripts/SPA/UploadFiles/uploadFileCtrl.js",
               "~/Scripts/SPA/Admin/adminCtrl.js",
               "~/Scripts/SPA/Post/postAddServ.js",
               "~/Scripts/SPA/Post/holderService.js",
               "~/Scripts/SPA/Post/imgService.js",
               "~/Scripts/SPA/Post/postAddCtrl.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/content/css/main.css",
                "~/content/css/bootstrap.css",
                "~/Content/css/owl.carousel.css",
                "~/content/css/font-awesome.css",
                "~/Content/css/animate.min.css",
                "~/content/css/ui-bootstrap-csp.css",
                "~/Content/css/responsive.css",
                "~/Scripts/Vendors/dropzone/dropzone.min.css"
                ));

            BundleTable.EnableOptimizations = false;
        }
    }
}
