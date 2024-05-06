using Microsoft.AspNetCore.Mvc;
using Web.Models;
using System.Collections.Generic;


namespace ProdutosAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutosController : ControllerBase
    {
        private static List<Produtos> _produtos = new List<Produtos>();

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_produtos);
        }

        [HttpPost]
        public IActionResult Post(Produtos produto)
        {
            _produtos.Add(produto);
            return CreatedAtAction(nameof(Get), new { id = produto.Id }, produto);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Produtos produto)
        {
            var index = _produtos.FindIndex(p => p.Id == id);
            if (index == -1)
                return NotFound();

            _produtos[index] = produto;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var produto = _produtos.Find(p => p.Id == id);
            if (produto == null)
                return NotFound();

            _produtos.Remove(produto);
            return NoContent();
        }
    }
}
