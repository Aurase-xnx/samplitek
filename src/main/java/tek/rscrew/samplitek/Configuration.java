package tek.rscrew.samplitek;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import tek.rscrew.samplitek.adapter.out.SampleMapper;
import tek.rscrew.samplitek.adapter.out.SamplePersistenceAdapter;
import tek.rscrew.samplitek.adapter.out.SampleRepository;
import tek.rscrew.samplitek.port.out.SampleAccess;

@org.springframework.context.annotation.Configuration
@EnableJpaRepositories
public class Configuration {

    @Autowired
    private SampleRepository sampleRepository;

    private SampleMapper sampleMapper = new SampleMapper();

    @Bean
    SampleAccess getSampleAccess(){
        return new SamplePersistenceAdapter(sampleRepository,sampleMapper);
    }



}
