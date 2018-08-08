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
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'PAT_HSZ_leaders',
        headerText: 'Лидери',
        mainText: null,
        nodeName: 'ЛІДЕРИ',
        NodeType: 'LEADER',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'ZaharchenkoStanislavVictorovich',
        headerText: 'Захарченко Станіслав Вікторович',
        mainText: null,
        nodeName: 'ЗАХАРЧЕНКО СТАНІСЛАВ ВІКТОРОВИЧ',
        NodeType: 'INDIVIDUAL',
        parentNode: null
      },
      {
        id: 'ChernorukMaximPetrovich',
        headerText: 'Чернорук Максим Петрович',
        mainText: null,
        nodeName: 'ЧЕРНОРУК МАКСИМ ПЕТРОВИЧ',
        NodeType: 'INDIVIDUAL',
        parentNode: null
      },
      {
        id: 'MAC',
        headerText: 'МІЖНАРОДНА АСОЦІАЦІЯ "ЗВАРЮВАННЯ"',
        mainText: `03150, Україна, місто Київ, вулиця БОЖЕНКА, 11\nТел.: +38(044)200-81-72,\n+38(044)200-81-08,\nfax: +38(044)200-81-45`,
        nodeName: 'МАС',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'PAT_HSZ_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        NodeType: 'TELEPHONE',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'UkrSudProm',
        headerText: 'АСОЦІАЦІЯ СУДНОБУДІВНИКІВ УКРАЇНИ "УКРСУДПРОМ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УКРСУДПРОМ',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'PAT_HSZ_Addresses',
        headerText: 'Адресси',
        mainText: null,
        nodeName: 'АДРЕССИ',
        NodeType: 'ADDRESS',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'Kovcheh_Eneya',
        headerText: '"Ковчег Енея"',
        mainText: `73000, Україна, місто Київ, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"КОВЧЕГ ЕНЕЯ"',
        NodeType: 'ADDRESS',
        parentNode: 'PAT_HSZ'
      },
      {
        id: '2000_lye_Pod_Vodoy',
        headerText: '"2000 Льє під Водою"',
        mainText: `73000, Україна, місто Харків, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"2000 ЛЬЄ ПІД ВОДОЮ"',
        NodeType: 'ADDRESS',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'Titanic',
        headerText: '"Титанік"',
        mainText: `73000, Україна, місто Одесса, 1\nТел.: +38(055)227-06-50, +38(055)227-19-67`,
        nodeName: '"ТИТАНІК"',
        NodeType: 'ADDRESS',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'ChernorukMaximPetrovich_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        NodeType: 'TELEPHONE',
        parentNode: 'ChernorukMaximPetrovich'
      },
      {
        id: 'PAT_HSZ_filials',
        headerText: 'Філіали',
        mainText: null,
        nodeName: 'ФІЛІАЛИ',
        NodeType: 'FILIAL',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'PAT_HSZ_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'FILIAL',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'UKR_Metal_Company',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'UAKP',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'PAT_HSZ_Bookkeepers',
        headerText: 'Бухгалтери',
        mainText: null,
        nodeName: 'БУХГАЛТЕРИ',
        NodeType: 'BOOKKEEPER',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'PAT_HSZ_Promoters',
        headerText: 'Засновники',
        mainText: null,
        nodeName: 'ЗАСНОВНИКИ',
        NodeType: 'PROMOTER',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'PAT_HSZ_Assignees',
        headerText: 'Правонаступники',
        mainText: null,
        nodeName: 'ПРАВОНАСТУПНИКИ',
        NodeType: 'ASSIGNEE',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'TkachenkoAnastasiaBorisovna',
        headerText: 'Ткаченко Анастасія Борисівна',
        mainText: null,
        nodeName: 'ТКАЧЕНКО АНАСТАСІЯ БОРИСІВНА',
        NodeType: 'BOOKKEEPER',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'MeshkovaYanaOlehivna',
        headerText: 'Мешкова Яна Олегівна',
        mainText: null,
        nodeName: 'МЕШКОВА ЯНА ОЛЕГІВНА',
        NodeType: 'BOOKKEEPER',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'TrofimovOleksandrHenadievich',
        headerText: 'Трофімов Олександр Генадійович',
        mainText: null,
        nodeName: 'ТРОФІМОВ ОЛЕКСАНДР ГЕНАДІЙОВИЧ',
        NodeType: 'BOOKKEEPER',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'VolohnoRomanKonstantinovich',
        headerText: 'Волохно Роман Константинович',
        mainText: null,
        nodeName: 'ВОЛОХНО РОМАН КОНСТАНТИНОВИЧ',
        NodeType: 'ASSIGNEE',
        parentNode: 'PAT_HSZ'
      },
      {
        id: 'UKR_Metal_Company_1',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'UAKP_1',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'UKR_Metal_Company_2',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'UAKP_2',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'UKR_Metal_Company_3',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "МЕТАЛООБРОБКИ"',
        mainText: `01032, Україна, місто Київ, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАМ',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'UAKP_3',
        headerText: 'УКРАЇНСЬКА АСОЦІАЦІЯ "КОРАБЕЛЬНЕ ПРИЛАДОБУДУВАННЯ"',
        mainText: `01032, Україна, місто Одесса, вулиця ЖИЛЯНСЬКА, 26, 107, 26\nТел.: 2700912, fax: 2449344`,
        nodeName: 'УАКП',
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      },
      {
        id: 'ViacheslavRomanKonstantinovich',
        headerText: "В'ячеслав Роман Константинович",
        mainText: null,
        nodeName: "В'ЯЧЕСЛАВ РОМАН КОНСТАНТИНОВИЧ",
        NodeType: 'INDIVIDUAL',
        parentNode: null
      },
      {
        id: 'ViacheslavRomanKonstantinovich_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        NodeType: 'TELEPHONE',
        parentNode: 'ViacheslavRomanKonstantinovich'
      },
      {
        id: 'ViacheslavRomanKonstantinovich_Bookkeepers',
        headerText: 'Бухгалтери',
        mainText: null,
        nodeName: 'БУХГАЛТЕРИ',
        NodeType: 'BOOKKEEPER',
        parentNode: 'ViacheslavRomanKonstantinovich'
      },
      {
        id: 'ViacheslavRomanKonstantinovich_Assignees',
        headerText: 'Правонаступники',
        mainText: null,
        nodeName: 'ПРАВОНАСТУПНИКИ',
        NodeType: 'ASSIGNEE',
        parentNode: 'ViacheslavRomanKonstantinovich'
      },
      {
        id: 'ViacheslavRomanKonstantinovich_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'WHAT_CREATED',
        parentNode: 'ViacheslavRomanKonstantinovich'
      },
      {
        id: 'ZaharchenkoStanislavVictorovich_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        NodeType: 'TELEPHONE',
        parentNode: 'ZaharchenkoStanislavVictorovich'
      },
      {
        id: 'ZaharchenkoStanislavVictorovich_Bookkeepers',
        headerText: 'Бухгалтери',
        mainText: null,
        nodeName: 'БУХГАЛТЕРИ',
        NodeType: 'BOOKKEEPER',
        parentNode: 'ZaharchenkoStanislavVictorovich'
      },
      {
        id: 'ZaharchenkoStanislavVictorovich_Assignees',
        headerText: 'Правонаступники',
        mainText: null,
        nodeName: 'ПРАВОНАСТУПНИКИ',
        NodeType: 'ASSIGNEE',
        parentNode: 'ZaharchenkoStanislavVictorovich'
      },
      {
        id: 'ZaharchenkoStanislavVictorovich_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'WHAT_CREATED',
        parentNode: 'ZaharchenkoStanislavVictorovich'
      },
      {
        id: 'ChernorukMaximPetrovich_Bookkeepers',
        headerText: 'Бухгалтери',
        mainText: null,
        nodeName: 'БУХГАЛТЕРИ',
        NodeType: 'BOOKKEEPER',
        parentNode: 'ChernorukMaximPetrovich'
      },
      {
        id: 'ChernorukMaximPetrovich_Assignees',
        headerText: 'Правонаступники',
        mainText: null,
        nodeName: 'ПРАВОНАСТУПНИКИ',
        NodeType: 'ASSIGNEE',
        parentNode: 'ChernorukMaximPetrovich'
      },
      {
        id: 'ChernorukMaximPetrovich_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'WHAT_CREATED',
        parentNode: 'ChernorukMaximPetrovich'
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
        source: 'PAT_HSZ_leaders',
        target: 'ViacheslavRomanKonstantinovich'
      },
      {
        source: 'ChernorukMaximPetrovich',
        target: 'ChernorukMaximPetrovich_Telephone'
      },
      {
        source: 'ChernorukMaximPetrovich',
        target: 'ChernorukMaximPetrovich_Bookkeepers'
      },
      {
        source: 'ChernorukMaximPetrovich',
        target: 'ChernorukMaximPetrovich_Assignees'
      },
      {
        source: 'ChernorukMaximPetrovich',
        target: 'ChernorukMaximPetrovich_WhatCreated'
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
      },
      {
        source: 'ViacheslavRomanKonstantinovich',
        target: 'ViacheslavRomanKonstantinovich_Telephone'
      },
      {
        source: 'ViacheslavRomanKonstantinovich',
        target: 'ViacheslavRomanKonstantinovich_Bookkeepers'
      },
      {
        source: 'ViacheslavRomanKonstantinovich',
        target: 'ViacheslavRomanKonstantinovich_Assignees'
      },
      {
        source: 'ViacheslavRomanKonstantinovich',
        target: 'ViacheslavRomanKonstantinovich_WhatCreated'
      },
      {
        source: 'ZaharchenkoStanislavVictorovich',
        target: 'ZaharchenkoStanislavVictorovich_Telephone'
      },
      {
        source: 'ZaharchenkoStanislavVictorovich',
        target: 'ZaharchenkoStanislavVictorovich_Bookkeepers'
      },
      {
        source: 'ZaharchenkoStanislavVictorovich',
        target: 'ZaharchenkoStanislavVictorovich_Assignees'
      },
      {
        source: 'ZaharchenkoStanislavVictorovich',
        target: 'ZaharchenkoStanislavVictorovich_WhatCreated'
      },
      {
        source: 'ViacheslavRomanKonstantinovich_Telephone',
        target: 'ChernorukMaximPetrovich_Telephone'
      },
      {
        source: 'ViacheslavRomanKonstantinovich_Telephone',
        target: 'ZaharchenkoStanislavVictorovich_Telephone'
      }
    ]
  };
};

// const GraphData = _ => ({
//   rootNode: 'Oleh',
//   nodes: [
//     {
//       id: 'Oleh',
//       headerText: 'My name is Oleh',
//       mainText: 'description about Oleh',
//       nodeName: 'OLEH',
//       NodeType: 'LEGAL_ENTITY',
//       parentNode: null
//     },
//     {
//       id: 'Roma',
//       headerText: 'My name is ROMA',
//       mainText: 'description about ROMA',
//       nodeName: 'ROMA',
//       NodeType: 'INDIVIDUAL',
//       parentNode: null
//     },
//     {
//       id: 'Vova',
//       headerText: 'My name is Vova',
//       mainText: 'description about Vova',
//       nodeName: 'VOVA',
//       NodeType: 'TELEPHONE',
//       parentNode: 'Oleh'
//     },
//     {
//       id: 'Vitaliy',
//       headerText: 'My name is Vitaliy',
//       mainText: 'description about Vitaliy',
//       nodeName: 'VITALIY',
//       NodeType: 'ASSIGNEE',
//       parentNode: 'Oleh'
//     },
//     {
//       id: 'Vlad',
//       headerText: 'My name is Vlad',
//       mainText: 'description about Vlad',
//       nodeName: 'VLAD',
//       NodeType: 'FILIAL',
//       parentNode: 'Oleh'
//     },
//     {
//       id: 'Kiril',
//       headerText: 'My name is Kiril',
//       mainText: 'description about Kiril',
//       nodeName: 'KIRIL',
//       NodeType: 'INDIVIDUAL',
//       parentNode: null
//     },
//     {
//       id: 'Sasha',
//       headerText: 'My name is Sasha',
//       mainText: 'description about Sasha',
//       nodeName: 'SASHA',
//       NodeType: 'LEADER',
//       parentNode: 'Roma'
//     },
//     {
//       id: 'Daniil',
//       headerText: 'My name is Daniil',
//       mainText: 'description about Daniil',
//       nodeName: 'DANIIL',
//       NodeType: 'TELEPHONE',
//       parentNode: 'Roma'
//     },
//     {
//       id: 'Lesya',
//       headerText: 'My name is Lesya',
//       mainText: 'description about Lesya',
//       nodeName: 'LESYA',
//       NodeType: 'PARENT',
//       parentNode: 'Roma'
//     },
//     {
//       id: 'Anna',
//       headerText: 'My name is Anna',
//       mainText: 'description about Anna',
//       nodeName: 'ANNA',
//       NodeType: 'LEGAL_ENTITY',
//       parentNode: null
//     },
//     {
//       id: 'Anastasia',
//       headerText: 'My name is Anastasia',
//       mainText: 'description about Anastasia',
//       nodeName: 'ANASTASIA',
//       NodeType: 'LEADER',
//       parentNode: 'Anna'
//     },
//     {
//       id: 'Marina',
//       headerText: 'My name is Marina',
//       mainText: 'description about Marina',
//       nodeName: 'MARINA',
//       NodeType: 'OPERATION',
//       parentNode: 'Anna'
//     },
//     {
//       id: 'Kolya',
//       headerText: 'My name is Kolya',
//       mainText: 'description about Kolya',
//       nodeName: 'KOLYA',
//       NodeType: 'LEGAL_ENTITY',
//       parentNode: null
//     },
//     {
//       id: 'Evgeniy',
//       headerText: 'My name is Evgeniy',
//       mainText: 'description about Evgeniy',
//       nodeName: 'EVGENIY',
//       NodeType: 'TELEPHONE',
//       parentNode: 'Anna'
//     },
//     {
//       id: 'Masha',
//       headerText: 'My name is Masha',
//       mainText: 'description about Masha',
//       nodeName: 'MASHA',
//       NodeType: 'PROMOTER',
//       parentNode: 'Kolya'
//     },
//     {
//       id: 'Asya',
//       headerText: 'My name is Asya',
//       mainText: 'description about Asya',
//       nodeName: 'ASYA',
//       NodeType: 'BOOKKEEPER',
//       parentNode: 'Kolya'
//     },
//     {
//       id: 'Sergey',
//       headerText: 'My name is Sergey',
//       mainText: 'description about Sergey',
//       nodeName: 'SERGEY',
//       NodeType: 'FIO',
//       parentNode: 'Kiril'
//     },
//     {
//       id: 'Andrey',
//       headerText: 'My name is Andrey',
//       mainText: 'description about Andrey',
//       nodeName: 'ANDREY',
//       NodeType: 'WHAT_CREATED',
//       parentNode: 'Kolya'
//     },
//     {
//       id: 'Vanya',
//       headerText: 'My name is Vanya',
//       mainText: 'description about Vanya',
//       nodeName: 'VANYA',
//       NodeType: 'WHAT_CREATED',
//       parentNode: 'Kiril'
//     },
//     {
//       id: 'Volodya',
//       headerText: 'My name is Volodya',
//       mainText: 'description about Volodya',
//       nodeName: 'VOLODYA',
//       NodeType: 'PARENT',
//       parentNode: 'Kiril'
//     }
//   ],
//   links: [
//     {
//       source: 'Oleh',
//       target: 'Roma'
//     },
//     {
//       source: 'Oleh',
//       target: 'Vova'
//     },
//     {
//       source: 'Oleh',
//       target: 'Vitaliy'
//     },
//     {
//       source: 'Oleh',
//       target: 'Vlad'
//     },
//     {
//       source: 'Oleh',
//       target: 'Kiril'
//     },
//     {
//       source: 'Roma',
//       target: 'Sasha'
//     },
//     {
//       source: 'Roma',
//       target: 'Daniil'
//     },
//     {
//       source: 'Roma',
//       target: 'Lesya'
//     },
//     {
//       source: 'Roma',
//       target: 'Anna'
//     },
//     {
//       source: 'Anna',
//       target: 'Anastasia'
//     },
//     {
//       source: 'Anna',
//       target: 'Marina'
//     },
//     {
//       source: 'Anna',
//       target: 'Kolya'
//     },
//     {
//       source: 'Anna',
//       target: 'Evgeniy'
//     },
//     {
//       source: 'Kolya',
//       target: 'Masha'
//     },
//     {
//       source: 'Kolya',
//       target: 'Asya'
//     },
//     {
//       source: 'Kolya',
//       target: 'Sergey'
//     },
//     {
//       source: 'Kolya',
//       target: 'Andrey'
//     },
//     {
//       source: 'Sergey',
//       target: 'Andrey'
//     },
//     {
//       source: 'Sergey',
//       target: 'Kiril'
//     },
//     {
//       source: 'Sergey',
//       target: 'Daniil'
//     },
//     {
//       source: 'Sergey',
//       target: 'Marina'
//     },
//     {
//       source: 'Kiril',
//       target: 'Vova'
//     },
//     {
//       source: 'Kiril',
//       target: 'Vanya'
//     },
//     {
//       source: 'Kiril',
//       target: 'Volodya'
//     }
//   ]
// });

export default GraphData();
