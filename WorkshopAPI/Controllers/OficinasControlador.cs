using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkshopAPI.Data;
using WorkshopAPI.Models;

namespace WorkshopAPI.Controladores
{
    [Route("api/[controller]")]
    [ApiController]
    public class OficinasControlador : ControllerBase
    {
        private readonly BancoDeDadosContexto _contexto;

        public OficinasControlador(BancoDeDadosContexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Oficina>>> ObterOficinas()
        {
            return await _contexto.Oficinas.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Oficina>> ObterOficina(int id)
        {
            var oficina = await _contexto.Oficinas.FindAsync(id);
            if (oficina == null) return NotFound();
            return oficina;
        }

        [HttpPost]
        public async Task<ActionResult<Oficina>> CriarOficina(Oficina oficina)
        {
            _contexto.Oficinas.Add(oficina);
            await _contexto.SaveChangesAsync();
            return CreatedAtAction(nameof(ObterOficina), new { id = oficina.Id }, oficina);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarOficina(int id, Oficina oficina)
        {
            if (id != oficina.Id) return BadRequest();
            _contexto.Entry(oficina).State = EntityState.Modified;
            await _contexto.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoverOficina(int id)
        {
            var oficina = await _contexto.Oficinas.FindAsync(id);
            if (oficina == null) return NotFound();

            _contexto.Oficinas.Remove(oficina);
            await _contexto.SaveChangesAsync();
            return NoContent();
        }
    }
}
