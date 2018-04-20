import Realm from 'realm';

class Item {}
Item.schema = {
  name: 'Item',
  properties: {
    name:  'string',
    date: 'date',
    id: 'string'
  },
};

let realm = new Realm({schema: [Item]});

export default realm