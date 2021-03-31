using System.Web;
using System.Web.Optimization;

namespace viajes
{
    public class BundleConfig
    {
             public static void RegisterBundles(BundleCollection Bundles)
        {
            Bundles.Add(new Bundle("~/Bundles").Include(
                "~/Bundles/main.*",
                "~/Bundles/polyfills.*",
                "~/Bundles/runtime.*",
                "~/Bundles/vendor.*",
                "~/Bundles/inline.*",
                "~/Bundles/zone.*",
                "~/Bundles/scripts.*"
                ));
            Bundles.Add(new StyleBundle("~/Content/Styles").Include(
                "~/bundles/styles.*"
                ));
        }
    }
}
