using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace viajes.Models.WS
{
    public class user
    {
        public string email { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string imaPerfil { get; set; }
        public string token { get; set; }
        public string otrodato { get; set; }

    }

    public class newUser
    {
        public string email { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string imaPerfil { get; set; }
        public string password { get; set; }
        public string otrodato { get; set; }

    }
}
