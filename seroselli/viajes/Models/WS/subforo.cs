using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace viajes.Models.WS
{
    public class subforo
    {
        public decimal sub_id { get; set; }
        public decimal id { get; set; }
        public System.DateTime fechaCreacion { get; set; }
        public string comentario { get; set; }
        public string usuario { get; set; }

        public virtual foro foro { get; set; }
        public virtual usuarios usuarios { get; set; }

    }
}