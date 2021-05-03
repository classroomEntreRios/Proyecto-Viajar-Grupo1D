using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.UI.WebControls;
using viajes.Models;
using viajes.Models.WS;

namespace viajes.Controllers
{
    public class forumController : ApiController
    {
        viajarEntities db = new viajarEntities();


        // GET: api/Forum
        public List<foro> Get()
        {
            List<foro> forums = db.foro.ToList();
            return forums;
        }

        [HttpPost]
        public JsonResult<string[]>  subforos(int id)
        {
            string[] comments = db.foro_content.Where(a => a.id == id).ToArray();
            return comments;
        }

    }
 
    
}
