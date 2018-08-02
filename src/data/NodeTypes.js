const NodeTypes = _ => ({
  LEGAL_ENTITY: {
    TELEPHONE: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/telephones_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_telephones_opened.svg'
    },
    ADDRESS: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/addresses_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_addresses_opened.svg'
    },
    ASSIGNEE: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/assignees_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_assignees_opened.svg'
    },
    FILIAL: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/filials_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_filials_opened.svg'
    },
    BOOKKEEPER: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/bookkeepers_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_bookkeepers_opened.svg'
    },
    LEADER: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/leaders_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_leaders_opened.svg'
    },
    OPERATION: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/operations_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_operations_opened.svg'
    },
    WHAT_CREATED: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/whatCreated_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_whatCreated_opened.svg'
    },
    PROMOTER: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/promoters_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_promoters_opened.svg'
    },
    close:
      'https://oodiordiy.000webhostapp.com/closed_nodes/legalEntity_closed.svg',
    open:
      'https://oodiordiy.000webhostapp.com/legal_entity_opened/le_legalEntity_opened.svg'
  },
  INDIVIDUAL: {
    TELEPHONE: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/telephones_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_telephones_opened.svg'
    },
    ADDRESS: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/addresses_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_addresses_opened.svg'
    },
    ASSIGNEE: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/assignees_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_assignees_opened.svg'
    },
    BOOKKEEPER: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/bookkeepers_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_bookkeepers_opened.svg'
    },
    LEADER: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/leaders_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_leaders_opened.svg'
    },
    WHAT_CREATED: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/whatCreated_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_whatCreated_opened.svg'
    },
    PARENT: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/parents_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_parents_opened.svg'
    },
    FIO: {
      close: 'https://oodiordiy.000webhostapp.com/closed_nodes/FIO_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/individual_opened/i_FIO_opened.svg'
    },
    close:
      'https://oodiordiy.000webhostapp.com/closed_nodes/individual_closed.svg',
    open:
      'https://oodiordiy.000webhostapp.com/individual_opened/i_individual_opened.svg'
  },
  DISCONNECTED: {
    TELEPHONE: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/telephones_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/disconnected_opened/dc_telephones_opened.svg'
    },
    ADDRESS: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/addresses_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/disconnected_opened/dc_addresses_opened.svg'
    },
    OPERATION: {
      close:
        'https://oodiordiy.000webhostapp.com/closed_nodes/operations_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/disconnected_opened/dc_operations_opened.svg'
    },
    FIO: {
      close: 'https://oodiordiy.000webhostapp.com/closed_nodes/FIO_closed.svg',
      open:
        'https://oodiordiy.000webhostapp.com/disconnected_opened/dc_FIO_opened.svg'
    }
  }
});

export default NodeTypes();
