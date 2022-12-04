package tek.rscrew.samplitek.service;

import tek.rscrew.samplitek.model.Sample;
import tek.rscrew.samplitek.port.in.SampleContract;
import tek.rscrew.samplitek.port.out.SampleAccess;

import java.util.List;

public class sampleService implements SampleContract {

    private SampleAccess sampleAccess;

    @Override
    public List<Sample> getSamples() {
        return sampleAccess.getSamples();

    }

    @Override
    public Sample singleSample(long id) {
        return sampleAccess.singleSample(id);
    }

    @Override
    public Sample createSample(Sample sa) {
        return sampleAccess.createSample(sa);
    }

    @Override
    public Sample updateSample(Sample sa) {
        return null;
    }

    @Override
    public void deleteSample(long id) {

    }
}

