using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;
using viajes.Models;
using viajes.Models.WS;

namespace viajes.Controllers
{
    public class climaController : ApiController
    {
        //private userEntities1 db = new userEntities1();
        readonly userEntities1 db = new userEntities1();
        [HttpGet]

        // GET: clima
        public List<ciudades> listadoCiudades()
        {
            List<ciudades> listado = db.ciudades.ToList();
            return listado;
        }

    }
}
