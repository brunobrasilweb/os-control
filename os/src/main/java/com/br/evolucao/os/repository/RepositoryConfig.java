package com.br.evolucao.os.repository;

import com.br.evolucao.os.entity.Cliente;
import com.br.evolucao.os.entity.Ordemservico;
import com.br.evolucao.os.entity.Servico;
import com.br.evolucao.os.entity.Usuario;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Servico.class);
        config.exposeIdsFor(Ordemservico.class);
        config.exposeIdsFor(Cliente.class);
        config.exposeIdsFor(Usuario.class);
    }

}
