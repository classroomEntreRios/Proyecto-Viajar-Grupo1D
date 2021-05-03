using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace viajes.Models.WS
{
    public class Logueado
    {
       
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string imaPerfil { get; set; }
        public string email { get; set; }
        public string token { get; set; }
    }
}