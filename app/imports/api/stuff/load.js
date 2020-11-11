import datas from '../../../data/campusmap.json';

class Load {

  load = (setState) => {
    setState(datas.features);
  }
}

export default Load;
