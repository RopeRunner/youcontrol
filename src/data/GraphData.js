import LinkTypes from './LinkTypes';

const GraphData = _ => {
  return {
    rootNode: 'PAT_HSZ',
    nodes: [
      {
        id: 'PAT_HSZ',
        headerText:
          'ПУБЛІЧНЕ АКЦІОНЕРНЕ ТОВАРИСТВО "ХЕРСОНСЬКИЙ СУДНОБУДІВНИЙ ЗАВОД"',
        mainText: `73000, Україна, місто Херсон, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ПАТ ХСЗ',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'PAT_HSZ_leaders',
        headerText: 'Лидери',
        mainText: null,
        nodeName: 'ЛІДЕРИ',
        NodeType: 'LEADER'
      },
      {
        id: 'ZaharchenkoStanislavVictorovich',
        headerText: 'Захарченко Станіслав Вікторович',
        mainText: null,
        nodeName: 'ЗАХАРЧЕНКО СТАНІСЛАВ ВІКТОРОВИЧ',
        NodeType: 'INDIVIDUAL'
      },
      {
        id: 'ChernorukMaximPetrovich',
        headerText: 'Чернорук Максим Петрович',
        mainText: null,
        nodeName: 'ЧЕРНОРУК МАКСИМ ПЕТРОВИЧ',
        NodeType: 'INDIVIDUAL'
      },
      {
        id: 'MAC',
        headerText: 'МІЖНАРОДНА АСОЦІАЦІЯ "ЗВАРЮВАННЯ"',
        mainText: `03150, Україна, місто Київ, вулиця БОЖЕНКА, 11\nТел.: +38(044)200-81-72,\n+38(044)200-81-08,\nfax: +38(044)200-81-45`,
        nodeName: 'МАС',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'PAT_HSZ_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        NodeType: 'TELEPHONE'
      },
      {
        id: 'UkrSudProm',
        headerText: 'АСОЦІАЦІЯ СУДНОБУДІВНИКІВ УКРАЇНИ "УКРСУДПРОМ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УКРСУДПРОМ',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'PAT_HSZ_Addresses',
        headerText: 'Адресси',
        mainText: null,
        nodeName: 'АДРЕССИ',
        NodeType: 'ADDRESS'
      },
      {
        id: 'Kovcheh_Eneya',
        headerText: '"Ковчег Енея"',
        mainText: `73000, Україна, місто Київ, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"КОВЧЕГ ЕНЕЯ"',
        NodeType: 'ADDRESS'
      },
      {
        id: '2000_lye_Pod_Vodoy',
        headerText: '"2000 Льє під Водою"',
        mainText: `73000, Україна, місто Харків, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"2000 ЛЬЄ ПІД ВОДОЮ"',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'Titanic',
        headerText: '"Титанік"',
        mainText: `73000, Україна, місто Одесса, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"ТИТАНІК"',
        NodeType: 'ADDRESS'
      },
      {
        id: 'ChernorukMaximPetrovich_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        NodeType: 'TELEPHONE'
      },
      {
        id: 'PAT_HSZ_filials',
        headerText: 'Філіали',
        mainText: null,
        nodeName: 'ФІЛІАЛИ',
        NodeType: 'FILIAL'
      },
      {
        id: 'PAT_HSZ_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'FILIAL'
      },
      {
        id: 'UKR_Metal_Company',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'UAKP',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'PAT_HSZ_Bookkeepers',
        headerText: 'Бухгалтери',
        mainText: null,
        nodeName: 'БУХГАЛТЕРИ',
        NodeType: 'BOOKKEEPER'
      },
      {
        id: 'PAT_HSZ_Promoters',
        headerText: 'Засновники',
        mainText: null,
        nodeName: 'ЗАСНОВНИКИ',
        NodeType: 'PROMOTER'
      },
      {
        id: 'PAT_HSZ_Assignees',
        headerText: 'Правонаступники',
        mainText: null,
        nodeName: 'ПРАВОНАСТУПНИКИ',
        NodeType: 'ASSIGNEE'
      },
      {
        id: 'TkachenkoAnastasiaBorisovna',
        headerText: 'Ткаченко Анастасія Борисівна',
        mainText: null,
        nodeName: 'ТКАЧЕНКО АНАСТАСІЯ БОРИСІВНА',
        NodeType: 'BOOKKEEPER'
      },
      {
        id: 'MeshkovaYanaOlehivna',
        headerText: 'Мешкова Яна Олегівна',
        mainText: null,
        nodeName: 'МЕШКОВА ЯНА ОЛЕГІВНА',
        NodeType: 'BOOKKEEPER'
      },
      {
        id: 'TrofimovOleksandrHenadievich',
        headerText: 'Трофімов Олександр Генадійович',
        mainText: null,
        nodeName: 'ТРОФІМОВ ОЛЕКСАНДР ГЕНАДІЙОВИЧ',
        NodeType: 'BOOKKEEPER'
      },
      {
        id: 'VolohnoRomanKonstantinovich',
        headerText: 'Волохно Роман Константинович',
        mainText: null,
        nodeName: 'ВОЛОХНО РОМАН КОНСТАНТИНОВИЧ',
        NodeType: 'ASSIGNEE'
      },
      {
        id: 'UKR_Metal_Company_1',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'UAKP_1',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'UKR_Metal_Company_2',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'UAKP_2',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'UKR_Metal_Company_3',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'UAKP_3',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        NodeType: 'LEGAL_ENTITY'
      },
      {
        id: 'ViacheslavRomanKonstantinovich',
        headerText: "В'ячеслав Роман Константинович",
        mainText: null,
        nodeName: "В'ЯЧЕСЛАВ РОМАН КОНСТАНТИНОВИЧ",
        NodeType: 'ASSIGNEE'
      }
    ],
    links: [
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Addresses'
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Telephone'
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_leaders'
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_filials'
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_WhatCreated'
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Promoters'
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Bookkeepers'
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Assignees'
      },
      {
        source: 'PAT_HSZ_leaders',
        target: 'ZaharchenkoStanislavVictorovich'
      },
      {
        source: 'PAT_HSZ_leaders',
        target: 'ChernorukMaximPetrovich'
      },
      {
        source: 'ChernorukMaximPetrovich',
        target: 'ChernorukMaximPetrovich_Telephone'
      },
      {
        source: 'ChernorukMaximPetrovich_Telephone',
        target: 'MAC'
      },
      {
        source: 'PAT_HSZ_Addresses',
        target: 'Kovcheh_Eneya'
      },
      {
        source: 'PAT_HSZ_Addresses',
        target: '2000_lye_Pod_Vodoy'
      },
      {
        source: 'PAT_HSZ_Addresses',
        target: 'Titanic'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UkrSudProm'
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company'
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UAKP'
      },
      {
        source: 'PAT_HSZ_Bookkeepers',
        target: 'TkachenkoAnastasiaBorisovna'
      },
      {
        source: 'PAT_HSZ_Bookkeepers',
        target: 'MeshkovaYanaOlehivna'
      },
      {
        source: 'PAT_HSZ_Bookkeepers',
        target: 'TrofimovOleksandrHenadievich'
      },
      {
        source: 'PAT_HSZ_Assignees',
        target: 'VolohnoRomanKonstantinovich'
      },
      {
        source: 'PAT_HSZ_Promoters',
        target: 'ViacheslavRomanKonstantinovich'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_1'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_2'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_3'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UKR_Metal_Company_1'
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company_2'
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company_3'
      }
    ]
  };
};

export default GraphData();
