using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkshopAPI.Data;
using WorkshopAPI.Models;

namespace WorkshopAPI.Controladores
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColaboradoresControlador : ControllerBase
    {
        private readonly BancoDeDadosContexto _contexto;

        public ColaboradoresControlador(BancoDeDadosContexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Colaborador>>> ObterColaboradores()
        {
            return await _contexto.Colaboradores.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Colaborador>> ObterColaborador(int id)
        {
            var colaborador = await _contexto.Colaboradores.FindAsync(id);
            if (colaborador == null) return NotFound();
            return colaborador;
        }

        [HttpPost]
        public async Task<ActionResult<Colaborador>> CriarColaborador(Colaborador colaborador)
        {
            _contexto.Colaboradores.Add(colaborador);
            await _contexto.SaveChangesAsync();
            return CreatedAtAction(nameof(ObterColaborador), new { id = colaborador.Id }, colaborador);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarColaborador(int id, Colaborador colaborador)
        {
            if (id != colaborador.Id) return BadRequest();
            _contexto.Entry(colaborador).State = EntityState.Modified;
            await _contexto.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoverColaborador(int id)
        {
            var colaborador = await _contexto.Colaboradores.FindAsync(id);
            if (colaborador == null) return NotFound();

            _contexto.Colaboradores.Remove(colaborador);
            await _contexto.SaveChangesAsync();
            return NoContent();
        }
    }
}
