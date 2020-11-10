import papa from 'papaparse';
import { features } from '../data/campusmap.json';

class LoadBuildingsTask {
  covid19DataURl = 'https://raw.githubusercontent.com/HACC2020/data/main/uh_occupancy/2020-0824_1200pm-259pm_devices_1598317333.csv';

  load = (setState) => {
    papa.parse(this.covid19DataURl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data)
    });

  }
}

export default LoadBuildingsTask;
