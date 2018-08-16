const typeSwitcher = (type, fields) => {
  const importantData = {
    headerText: null,
    mainText: null,
    NodeType: null,
    label: null
  };

  switch (type) {
    case 'PrivatePerson':
    case 'AbstractPerson':
    case 'UndefinedPerson':
      importantData.headerText = 'Фізична особа';
      importantData.NodeType = 'INDIVIDUAL';
      importantData.label = 'ФІЗ. ОСОБА';
      break;
    case 'Postcode':
      importantData.headerText = 'Поштовий Індекс';
      importantData.mainText = fields.Code;
      importantData.NodeType = 'ADDRESS';
      importantData.label = 'ПОШТОВИЙ ІНДЕКС';
      break;
    case 'LegalPerson':
      importantData.headerText = 'Юридична особа';
      importantData.mainText = fields.Code;
      importantData.NodeType = 'LEGAL_ENTITY';
      importantData.label = 'ЮР. ОСОБА';
      break;
    case 'FullName':
    case 'ShortName':
    case 'ContractorName':
      importantData.headerText = fields.Name;
      importantData.NodeType = 'ADDRESS';
      importantData.label = 'НАЗВА';
      break;
    case 'PersonName':
      importantData.headerText = fields.Name;
      importantData.NodeType = 'FIO';
      importantData.label = 'ФІО';
      break;
    case 'Address':
      importantData.headerText = 'Адреса';
      importantData.mainText = fields.Source;
      importantData.NodeType = 'ADDRESS';
      importantData.label = 'АДРЕСА';
      break;
    case 'Office':
      importantData.headerText = 'Офис';
      importantData.mainText = fields.Source;
      importantData.NodeType = 'ADDRESS';
      importantData.label = 'ОФИС';
      break;
    case 'Phone':
      importantData.headerText = 'Телефон';
      importantData.mainText = fields.Number;
      importantData.NodeType = 'TELEPHONE';
      importantData.label = 'ТЕЛЕФОН';
      break;
    case 'Managers':
      importantData.headerText = 'Менеджер';
      importantData.NodeType = 'BOOKKEEPER';
      importantData.label = 'МЕНЕДЖЕР';
      break;
    case 'Founders':
      importantData.headerText = 'Засновники';
      importantData.NodeType = 'WHAT_CREATED';
      importantData.label = 'ЗАСНОВНИКИ';
      break;
    case 'Branches':
      importantData.headerText = 'Філіали';
      importantData.NodeType = 'FILIAL';
      importantData.label = 'ФІЛІАЛИ';
      break;
    default:
      throw new Error('invalid type: ' + type);
  }

  return importantData;
};

export default typeSwitcher;
