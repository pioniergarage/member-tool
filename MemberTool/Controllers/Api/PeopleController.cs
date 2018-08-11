using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MemberTool.Models;
using MemberTool.Models.Entities;

namespace MemberTool.Controllers.Api
{
    [Produces("application/json")]
    [Microsoft.AspNetCore.Mvc.Route("api/People")]
    public class PeopleController : Controller
    {
        private readonly MemberToolContext _context;

        public PeopleController(MemberToolContext context)
        {
            _context = context;
        }

        // GET: api/People
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public IEnumerable<Person> GetPersons()
        {
            return _context.Persons.IncludeAll();
        }

        // GET: api/People/5
        [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
        public async Task<IActionResult> GetPerson([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var person = await _context.Persons.IncludeAll().SingleOrDefaultAsync(m => m.Id == id);

            if (person == null)
            {
                return NotFound();
            }
            var role = person.CurrentPGRole;

            return Ok(person);
        }

        // PUT: api/People/5
        [Microsoft.AspNetCore.Mvc.HttpPut("{id}")]
        public async Task<IActionResult> PutPerson([FromRoute] string id, [Microsoft.AspNetCore.Mvc.FromBody] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.Id)
            {
                return BadRequest();
            }

            _context.Entry(person).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/People
        [Microsoft.AspNetCore.Mvc.HttpPost]
        public async Task<IActionResult> PostPerson([Microsoft.AspNetCore.Mvc.FromBody] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Persons.Add(person);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPerson), new { id = person.Id }, person);
        }
        

        private bool PersonExists(string id)
        {
            return _context.Persons.Any(e => e.Id == id);
        }
    }
}