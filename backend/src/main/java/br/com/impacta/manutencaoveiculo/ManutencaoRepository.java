package br.com.impacta.manutencaoveiculo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.JpaRepositoryFactory;

public interface ManutencaoRepository extends JpaRepository<ManutencaoModel, Long> {

	
	public List<ManutencaoModel> findByNome(String string);

}

