import { StackbitApi } from './stackbit-api';
import { expect } from 'chai';
import sourcebit from 'sourcebit';
import sourcebitConfig from './__test__/sourcebit';
import dataClient from './sourcebit-data-client';

describe('watheia/molecular.api.stackbit-api', function () {
  beforeEach(() => {
    sourcebit.fetch(sourcebitConfig);
  });

  it('MUST be instantiated with stackbit data cache', async () => {
    const data = await dataClient.getData();
    expect(new StackbitApi(data)).to.be.ok;
  });

  it('SHOULD return all data in the cache', async () => {
    const data = new StackbitApi(await dataClient.getData()).getData();
    expect(data).to.be.ok;
    expect(data).to.have.property('objects');
    expect(data).to.have.property('pages');
    expect(data).to.have.property('props');
  });
});
