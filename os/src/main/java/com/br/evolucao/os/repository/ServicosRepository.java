package com.br.evolucao.os.repository;

import com.br.evolucao.os.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "servico", collectionResourceRel = "lista")
public interface ServicosRepository extends JpaRepository<Servico, Long> {

}
