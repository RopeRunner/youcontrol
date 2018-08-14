const NodeTypes = _ => ({
  LEGAL_ENTITY: {
    TELEPHONE: {
      color: '#80f108',
      longDescription: 'Телефон',
      shortDescription: 'ТЕЛЕФОН',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/telephones_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_telephones_opened.svg'
    },
    ADDRESS: {
      color: '#00eaa0',
      longDescription: 'Адрес',
      shortDescription: 'АДРЕС',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/addresses_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_addresses_opened.svg'
    },
    ASSIGNEE: {
      color: '#00fffc',
      longDescription: 'Правопреемники',
      shortDescription: 'ПРАВОПРЕЕМНИКИ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/assignees_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_assignees_opened.svg'
    },
    FILIAL: {
      color: '#bd10e0',
      longDescription: 'Филиалы',
      shortDescription: 'ФИЛИАЛЫ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/filials_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_filials_opened.svg'
    },
    BOOKKEEPER: {
      color: '#f20107',
      longDescription: 'Бухгалтера',
      shortDescription: 'БУХГАЛТЕРА',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/bookkeepers_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_bookkeepers_opened.svg'
    },
    LEADER: {
      color: '#f58ef1',
      longDescription: 'Лидеры',
      shortDescription: 'ЛИДЕРЫ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/leaders_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_leaders_opened.svg'
    },
    OPERATION: {
      color: '#dd0000',
      longDescription: 'Операции',
      shortDescription: 'ОПЕРАЦИИ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/operations_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_operations_opened.svg'
    },
    WHAT_CREATED: {
      color: '#f0e24b',
      longDescription: 'Основанные компании',
      shortDescription: 'ОСНОВАННЫЕ КОМПАНИИ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/whatCreated_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_whatCreated_opened.svg'
    },
    PROMOTER: {
      color: '#aaaaaa',
      longDescription: 'Основатели',
      shortDescription: 'ОСНОВАТЕЛИ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/promoters_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_promoters_opened.svg'
    },
    color: '#11a7f3',
    longDescription: 'Юридические лица',
    shortDescription: 'ЮРИДИЧЕСКИЕ ЛИЦА',
    close:
      'https://oodiordiy.000webhostapp.com/closed_nodes/legalEntity_closed.svg',
    open:
      'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_legalEntity_opened.svg'
  },
  INDIVIDUAL: {
    TELEPHONE: {
      color: '#80f108',
      longDescription: 'Телефон',
      shortDescription: 'ТЕЛЕФОН',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/telephones_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_telephones_opened.svg'
    },
    ADDRESS: {
      color: '#00eaa0',
      longDescription: 'Адрес',
      shortDescription: 'АДРЕС',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/addresses_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_addresses_opened.svg'
    },
    ASSIGNEE: {
      color: '#00fffc',
      longDescription: 'Правопреемники',
      shortDescription: 'ПРАВОПРЕЕМНИКИ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/assignees_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_assignees_opened.svg'
    },
    BOOKKEEPER: {
      color: '#f20107',
      longDescription: 'Бухгалтера',
      shortDescription: 'БУХГАЛТЕРА',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/bookkeepers_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_bookkeepers_opened.svg'
    },
    LEADER: {
      color: '#f58ef1',
      longDescription: 'Лидеры',
      shortDescription: 'ЛИДЕРЫ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/leaders_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_leaders_opened.svg'
    },
    WHAT_CREATED: {
      color: '#f0e24b',
      longDescription: 'Основанные компании',
      shortDescription: 'ОСНОВАННЫЕ КОМПАНИИ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/whatCreated_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_whatCreated_opened.svg'
    },
    PARENT: {
      color: '#f3b45a',
      longDescription: 'Родственники',
      shortDescription: 'РОДСТВЕННИКИ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/parents_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_parents_opened.svg'
    },
    FIO: {
      color: '#5c0576',
      longDescription: 'ФИО',
      shortDescription: 'ФИО',
      close: 'https://oodiordiy.000webhostapp.com/closed_nodes/FIO_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_FIO_opened.svg'
    },
    color: '#ff5607',
    longDescription: 'Физические лица',
    shortDescription: 'ФИЗИЧЕСКОЕ ЛИЦА',
    close:
      'https://oodiordiy.000webhostapp.com/closed_nodes/individual_closed.svg',
    open:
      'https://oodiordiy.000webhostapp.com/individual_opened/i_individual_opened.svg'
  },
  DISCONNECTED: {
    TELEPHONE: {
      color: '#80f108',
      longDescription: 'Телефон',
      shortDescription: 'ТЕЛЕФОН',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/telephones_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/disconnected_opened/dc_telephones_opened.svg'
    },
    ADDRESS: {
      color: '#00eaa0',
      longDescription: 'Адрес',
      shortDescription: 'АДРЕС',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/addresses_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/disconnected_opened/dc_addresses_opened.svg'
    },
    OPERATION: {
      color: '#dd0000',
      longDescription: 'Операции',
      shortDescription: 'ОПЕРАЦИИ',
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/operations_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/disconnected_opened/dc_operations_opened.svg'
    },
    FIO: {
      color: '#5c0576',
      longDescription: 'ФИО',
      shortDescription: 'ФИО',
      close: 'https://oodiordiy.000webhostapp.com/closed_nodes/FIO_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/disconnected_opened/dc_FIO_opened.svg'
    },
    color: '#5e72c4',
    longDescription: 'Филиал юр. лица в финансовой группе',
    shortDescription: 'ФИЛИАЛ ЮР. ЛИЦА В ФИНАНСОВОЙ ГРУППЕ',
    close:
      'https://oodiordiy.000webhostapp.com/closed_nodes/legalEntity_closed.svg',
    open:
      'https://oodiordiy.000webhostapp.com/legal_entity_opened/dc_legalEntity_opened.svg'
  }
});

export default NodeTypes();
