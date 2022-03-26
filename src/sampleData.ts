import Appointment from "./interfaces/Appointment";

const today = new Date();
const at = (hours: number) => today.setHours(hours, 0);
export const sampleAppointments: Appointment[] = [{
  id: 0,
  startAt: at(9), 
  customer: { 
    firstName: 'Charley',
    lastName: 'Marley',
    phoneNumber: '0903323452'
  },
  salon: 'Alhumbra',
  stylist: 'Frank',
  notes: 'This is a note'
}, {
  id: 1,
  startAt: at(10), 
  customer: { 
    firstName: 'Frankie',
    lastName: 'Estalin',
    phoneNumber: '9843021984'
  },
  salon: 'Penatra',
  stylist: 'Alex',
  notes: 'Oh, holly crab there is no notes'
}, {
  id: 2,
  startAt: at(11), 
  customer: { 
    firstName: 'Casey',
    lastName: 'Mess',
    phoneNumber: '9843021984'
  },
  salon: 'Penatra',
  stylist: 'Aalex',
  notes: 'Oh, holly crabafsafdsfsaffsafdsafdsafdsfdsafsaf there is no notes'
}, {
  id: 3,
  startAt: at(12), 
  customer: { 
    firstName: 'Richard',
    lastName: 'Sanchez',
    phoneNumber: '9843asfd021984'
  },
  salon: 'Pendsfsafatra',
  stylist: 'Aalex',
  notes: 'Oh, holly crabafsafdsfsaffsafdsafdsafdsfdsafsaf there is no notes'
}, {
  id: 4,
  startAt: at(13), 
    customer: { 
      firstName: 'Jordan',
      lastName: 'Morgan',
      phoneNumber: '0353939023'
    },
    stylist: 'Qouch',
    salon: 'asfdsafsaf',
    notes: 'bla bla bla'
}, {
  id: 5,
  startAt: at(14), 
  customer: { 
    firstName: 'Jay',
    lastName: 'Dracul',
    phoneNumber: '09323434353'
  },
  stylist: ';ljfddsj;;j;dkjfa',
  salon: 'afdskj;lasjfsa;fjk',
  notes: 'af;kdjsa;fj;sajfd;alfja'
}, {
  id: 6,
  startAt: at(15), 
  customer: { 
    firstName: 'Alex',
    lastName: 'akdsfj;safjasf',
    phoneNumber: '243804975215'
  },
  salon: ';lsajfd;lsafj',
  stylist: 'askfdjsa;fja;sdfjsaf;dlkj',
  notes: 'dsa;lkfja;slfdj;dsafjsa;kfj'
}, {
  id: 7,
  startAt: at(16), 
  customer: { 
    firstName: 'Jules',
    lastName: 'kasfd;ldsajf',
    phoneNumber: '02390482332'
  },
  stylist: 'a;lksdjf;salfkja',
  salon: 'asf;lkasjf;sajf',
  notes: ';safdjk;safdkjsa;fjas;lkfjqpowitunvz;j;ajfpoqwhfe'
}, {
  id: 8,
  startAt: at(17), 
  customer: { 
    firstName: 'Steve',
    lastName: 'a;lkfsja;slfjsa;flje',
    phoneNumber: 'a;fdj;sakjfkqpwcnvzxvjqperu'
  },
  stylist: ';salfdj;saljfpqoiufdzcc',
  salon: 'af;kdlasjfpqowenjfvc;',
  notes: 'a;lsfjqpozcivjpoiu[ewqiurpqoiru'
}];