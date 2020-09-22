package br.com.impacta.manutencaoveiculo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManutencaoController {

	@Autowired
	private ManutencaoRepository repository;
	
	@GetMapping("/manutencoes")
	public List<ManutencaoModel> buscarTodos() {
		
		return repository.findAll();
		
	
	}
	@GetMapping("/manutencoes/nome/{nome}")
	public List<ManutencaoModel> buscarPorNome(@PathVariable String nome) {
		return repository.findByNome(nome);
	}
	
	@GetMapping("/manutencoes/{id}")
	public Optional<ManutencaoModel> buscarUm(@PathVariable Long id) {
		
		return repository.findById(id);
		
	

	}
	
	@PostMapping("/manutencoes")
	public ManutencaoModel criar(@RequestBody ManutencaoModel model) {
		repository.save(model);
		return model;
	}
	
	@PutMapping("/manutencoes/{id}")
	public ManutencaoModel atualizar(@PathVariable Long id, @RequestBody ManutencaoModel model) {
		model.setId(id);
		repository.save(model);
		return model;
	}
	
	@DeleteMapping("/manutencoes/{id}")
	public String remover(@PathVariable Long id) {
	 try {
		repository.deleteById(id);
	return "sucesso";
	}catch(Exception e) {
		return "Erro: " + e.getMessage();}
	}
	
	//pesadelo
	
}