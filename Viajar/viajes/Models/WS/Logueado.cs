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
        public string imaPerfil { get; set; }
        public string token { get; set; }

        public Logueado()
        {
            nombre = "Iniciar Sesion";
            imaPerfil = "";
            token = "";
        }
    }
}