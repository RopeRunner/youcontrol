import LinkTypes from './LinkTypes';
import NodeTypes from './NodeTypes';

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
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'PAT_HSZ_leaders',
        headerText: 'Лидери',
        mainText: null,
        nodeName: 'ЛІДЕРИ',
        svg: NodeTypes.LEADER
      },
      {
        id: 'ZaharchenkoStanislavVictorovich',
        headerText: 'Захарченко Станіслав Вікторович',
        mainText: null,
        nodeName: 'ЗАХАРЧЕНКО СТАНІСЛАВ ВІКТОРОВИЧ',
        svg: NodeTypes.LEADER,
        size: 2000
      },
      {
        id: 'ChernorukMaximPetrovich',
        headerText: 'Чернорук Максим Петрович',
        mainText: null,
        nodeName: 'ЧЕРНОРУК МАКСИМ ПЕТРОВИЧ',
        svg: NodeTypes.LEADER,
        size: 2000
      },
      {
        id: 'MAC',
        headerText: 'МІЖНАРОДНА АСОЦІАЦІЯ "ЗВАРЮВАННЯ"',
        mainText: `03150, Україна, місто Київ, вулиця БОЖЕНКА, 11\nТел.: +38(044)200-81-72,\n+38(044)200-81-08,\nfax: +38(044)200-81-45`,
        nodeName: 'МАС',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'PAT_HSZ_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        svg: NodeTypes.TELEPHONE
      },
      {
        id: 'UkrSudProm',
        headerText: 'АСОЦІАЦІЯ СУДНОБУДІВНИКІВ УКРАЇНИ "УКРСУДПРОМ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УКРСУДПРОМ',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'PAT_HSZ_Addresses',
        headerText: 'Адресси',
        mainText: null,
        nodeName: 'АДРЕССИ',
        svg: NodeTypes.ADDRESS
      },
      {
        id: 'Kovcheh_Eneya',
        headerText: '"Ковчег Енея"',
        mainText: `73000, Україна, місто Київ, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"КОВЧЕГ ЕНЕЯ"',
        svg: NodeTypes.ADDRESS
      },
      {
        id: '2000_lye_Pod_Vodoy',
        headerText: '"2000 Льє під Водою"',
        mainText: `73000, Україна, місто Харків, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"2000 ЛЬЄ ПІД ВОДОЮ"',
        svg: NodeTypes.ADDRESS
      },
      {
        id: 'Titanic',
        headerText: '"Титанік"',
        mainText: `73000, Україна, місто Одесса, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"ТИТАНІК"',
        svg: NodeTypes.ADDRESS
      },
      {
        id: 'ChernorukMaximPetrovich_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        svg: NodeTypes.TELEPHONE
      },
      {
        id: 'PAT_HSZ_filials',
        headerText: 'Філіали',
        mainText: null,
        nodeName: 'ФІЛІАЛИ',
        svg: NodeTypes.FILIAL
      },
      {
        id: 'PAT_HSZ_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        svg: NodeTypes.WHAT_CREATED
      },
      {
        id: 'UKR_Metal_Company',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'UAKP',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'PAT_HSZ_Bookkeepers',
        headerText: 'Бухгалтери',
        mainText: null,
        nodeName: 'БУХГАЛТЕРИ',
        svg: NodeTypes.BOOKKEEPER
      },
      {
        id: 'PAT_HSZ_Promoters',
        headerText: 'Засновники',
        mainText: null,
        nodeName: 'ЗАСНОВНИКИ',
        svg: NodeTypes.PROMOTER
      },
      {
        id: 'PAT_HSZ_Assignees',
        headerText: 'Правонаступники',
        mainText: null,
        nodeName: 'ПРАВОНАСТУПНИКИ',
        svg: NodeTypes.ASSIGNEE
      },
      {
        id: 'TkachenkoAnastasiaBorisovna',
        headerText: 'Ткаченко Анастасія Борисівна',
        mainText: null,
        nodeName: 'ТКАЧЕНКО АНАСТАСІЯ БОРИСІВНА',
        svg: NodeTypes.BOOKKEEPER
      },
      {
        id: 'MeshkovaYanaOlehivna',
        headerText: 'Мешкова Яна Олегівна',
        mainText: null,
        nodeName: 'МЕШКОВА ЯНА ОЛЕГІВНА',
        svg: NodeTypes.BOOKKEEPER
      },
      {
        id: 'TrofimovOleksandrHenadievich',
        headerText: 'Трофімов Олександр Генадійович',
        mainText: null,
        nodeName: 'ТРОФІМОВ ОЛЕКСАНДР ГЕНАДІЙОВИЧ',
        svg: NodeTypes.BOOKKEEPER
      },
      {
        id: 'VolohnoRomanKonstantinovich',
        headerText: 'Волохно Роман Константинович',
        mainText: null,
        nodeName: 'ВОЛОХНО РОМАН КОНСТАНТИНОВИЧ',
        svg: NodeTypes.ASSIGNEE
      },
      {
        id: 'UKR_Metal_Company_1',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'UAKP_1',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'UKR_Metal_Company_2',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'UAKP_2',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'UKR_Metal_Company_3',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'UAKP_3',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        svg: NodeTypes.LEGAL_ENTITY,
        size: 2000
      },
      {
        id: 'ViacheslavRomanKonstantinovich',
        headerText: "В'ячеслав Роман Константинович",
        mainText: null,
        nodeName: "В'ЯЧЕСЛАВ РОМАН КОНСТАНТИНОВИЧ",
        svg: NodeTypes.ASSIGNEE
      }
    ],
    links: [
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Addresses',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Telephone',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_leaders',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_filials',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_WhatCreated',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Promoters',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Bookkeepers',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ',
        target: 'PAT_HSZ_Assignees',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_leaders',
        target: 'ZaharchenkoStanislavVictorovich',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_leaders',
        target: 'ChernorukMaximPetrovich',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'ChernorukMaximPetrovich',
        target: 'ChernorukMaximPetrovich_Telephone',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'ChernorukMaximPetrovich_Telephone',
        target: 'MAC',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_Addresses',
        target: 'Kovcheh_Eneya',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_Addresses',
        target: '2000_lye_Pod_Vodoy',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_Addresses',
        target: 'Titanic',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UkrSudProm',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UAKP',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_Bookkeepers',
        target: 'TkachenkoAnastasiaBorisovna',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_Bookkeepers',
        target: 'MeshkovaYanaOlehivna',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_Bookkeepers',
        target: 'TrofimovOleksandrHenadievich',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_Assignees',
        target: 'VolohnoRomanKonstantinovich',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_Promoters',
        target: 'ViacheslavRomanKonstantinovich',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_1',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_2',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_3',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UKR_Metal_Company_1',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company_2',
        color: LinkTypes.LINK_TYPE_8.id
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company_3',
        color: LinkTypes.LINK_TYPE_8.id
      }
    ]
  };
};

export default GraphData();
