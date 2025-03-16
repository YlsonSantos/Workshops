using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkshopAPI.Data;
using WorkshopAPI.Models;

namespace WorkshopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OficinaController : ControllerBase
    {
        private readonly BancoDeDadosContexto _context;

        public OficinaController(BancoDeDadosContexto context)
        {
            _context = context;
        }

        // GET: api/oficinas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Oficina>>> ObterOficinas()
        {
            return await _context.Oficinas.ToListAsync();
        }

        // GET: api/oficinas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Oficina>> ObterOficinaPorId(int id)
        {
            var oficina = await _context.Oficinas.FindAsync(id);

            if (oficina == null)
            {
                return NotFound();
            }

            return oficina;
        }

        // POST: api/oficinas
        [HttpPost]
        public async Task<ActionResult<Oficina>> CriarOficina(Oficina oficina)
        {
            _context.Oficinas.Add(oficina);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(ObterOficinaPorId), new { id = oficina.Id }, oficina);
        }

        // PUT: api/oficinas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarOficina(int id, Oficina oficina)
        {
            if (id != oficina.Id)
            {
                return BadRequest();
            }

            _context.Entry(oficina).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OficinaExiste(id))
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

        // DELETE: api/oficinas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletarOficina(int id)
               {
            var oficina = await _context.Oficinas.FindAsync(id);
            if (oficina == null)
            {
                return NotFound();
            }

            _context.Oficinas.Remove(oficina);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OficinaExiste(int id)
        {
            return _context.Oficinas.Any(e => e.Id == id);
        }
    }
}
