interface OptionsQuestions {
  item: string;
  value: string;
}

export interface QuestionsProps {
  id: number;
  question: string;
  options: OptionsQuestions[];
  optionSelected?: string;
}

const Questions: QuestionsProps[] = [
  {
    id: 1,
    question:
      'Lorem ipsum consectetur imperdiet fringilla egestas cras facilisis egestas etiam, in lorem ut aliquam porta tempor volutpat taciti tellus quisque, commodo sit lectus consectetur etiam hac nibh lobortis. habitant phasellus cursus quis elit massa sit porta dictumst fermentum mi hendrerit, volutpat elit blandit nisl praesent orci sit neque phasellus fames vel, etiam fermentum aenean risus nisi sagittis sodales congue donec mollis. congue dolor mi tempor ipsum neque non urna, iaculis lorem suscipit molestie potenti lectus, commodo himenaeos nec et ipsum maecenas. sagittis quisque egestas pellentesque eget pellentesque ullamcorper porttitor amet elementum fusce, netus vitae platea mi diam torquent eu placerat. ',
    options: [
      {
        item: 'a',
        value:
          'Euismod tempus dictumst laoreet posuere lorem suspendisse morbi egestas dictumst mi',
      },
      {
        item: 'b',
        value: 'nulla lectus hac purus nec accumsan vehicula sed odio curae',
      },
      {
        item: 'c',
        value:
          'sociosqu consectetur viverra nostra lobortis tortor sodales augue lobortis',
      },
      {
        item: 'd',
        value: 'blandit sed fusce quis aliquam fringilla tincidunt nisi',
      },
      {
        item: 'e',
        value: 'primis aliquam tortor duis litora faucibus lacus, sem id',
      },
    ],
    optionSelected: 'a',
  },

  {
    id: 2,
    question:
      'Lorem ipsum consectetur imperdiet fringilla egestas cras facilisis egestas etiam, in lorem ut aliquam porta tempor volutpat taciti tellus quisque, commodo sit lectus consectetur etiam hac nibh lobortis. habitant phasellus cursus quis elit massa sit porta dictumst fermentum mi hendrerit, volutpat elit blandit nisl praesent orci sit neque phasellus fames vel, etiam fermentum aenean risus nisi sagittis sodales congue donec mollis. congue dolor mi tempor ipsum neque non urna, iaculis lorem suscipit molestie potenti lectus, commodo himenaeos nec et ipsum maecenas. sagittis quisque egestas pellentesque eget pellentesque ullamcorper porttitor amet elementum fusce, netus vitae platea mi diam torquent eu placerat. ',
    options: [
      { item: 'a', value: 'Sim' },
      { item: 'b', value: 'Não' },
      { item: 'c', value: 'Talvez' },
      { item: 'd', value: 'Sei lá' },
      { item: 'e', value: 'Concorco' },
    ],
    optionSelected: 'b',
  },

  {
    id: 3,
    question:
      'Lorem ipsum consectetur imperdiet fringilla egestas cras facilisis egestas etiam, in lorem ut aliquam porta tempor volutpat taciti tellus quisque, commodo sit lectus consectetur etiam hac nibh lobortis. habitant phasellus cursus quis elit massa sit porta dictumst fermentum mi hendrerit, volutpat elit blandit nisl praesent orci sit neque phasellus fames vel, etiam fermentum aenean risus nisi sagittis sodales congue donec mollis. congue dolor mi tempor ipsum neque non urna, iaculis lorem suscipit molestie potenti lectus, commodo himenaeos nec et ipsum maecenas. sagittis quisque egestas pellentesque eget pellentesque ullamcorper porttitor amet elementum fusce, netus vitae platea mi diam torquent eu placerat. ',
    options: [
      { item: 'a', value: 'eu tambem' },
      { item: 'b', value: 'nao sei mais' },
      { item: 'c', value: 'o que colocar' },
      { item: 'd', value: 'em todos esses' },
      { item: 'e', value: 'itens das questões' },
    ],
    optionSelected: 'c',
  },
];

export default Questions;
