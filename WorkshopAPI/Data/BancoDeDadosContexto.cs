using Microsoft.EntityFrameworkCore;
using WorkshopAPI.Models; 

namespace WorkshopAPI.Data
{
    public class BancoDeDadosContexto : DbContext
    {
        public BancoDeDadosContexto(DbContextOptions<BancoDeDadosContexto> opcoes) : base(opcoes) { }

        public DbSet<Colaborador> Colaboradores { get; set; }
        public DbSet<Oficina> Oficinas { get; set; }
    }
}
