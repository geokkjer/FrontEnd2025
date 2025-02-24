var model = {
  app: {
    currentPage: 'draw',
  },
  inputs: {
    drawPage: {
      selectAll: false,
      drawCount: 1,
      newPersonName: '',
      list: [
        { id: 100, name: 'Per', isSelected: true },
        { id: 101, name: 'Pål', isSelected: true },
        { id: 102, name: 'Espen', isSelected: false },
        { id: 103, name: 'Ole', isSelected: true },
      ]
    },
  },
  draws: [
    {
      winners: ['Ole'],
      time: '2018-10-17 17:10',
      participants: ['Per', 'Pål', 'Ole']
    },
    {
      winners: ['Per', 'Pål', 'Knut'],
      time: '2018-10-11 17:10',
      participants: ['Per', 'Pål', 'Ole', 'Knut', 'Gunnar']
    }
  ]
};

export default model;