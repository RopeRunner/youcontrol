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
        id: 'ChernorukMaximPetrovich_leaders',
        headerText: 'Лидери',
        mainText: null,
        nodeName: 'ЛІДЕРИ',
        NodeType: 'LEADER',
        parentNode: 'ChernorukMaximPetrovich'
      },
      {
        id: 'ViacheslavRomanKonstantinovich_leaders',
        headerText: 'Лидери',
        mainText: null,
        nodeName: 'ЛІДЕРИ',
        NodeType: 'LEADER',
        parentNode: 'ViacheslavRomanKonstantinovich'
      },
      {
        id: 'ZaharchenkoStanislavVictorovich_leaders',
        headerText: 'Лидери',
        mainText: null,
        nodeName: 'ЛІДЕРИ',
        NodeType: 'LEADER',
        parentNode: 'ZaharchenkoStanislavVictorovich'
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
        id: 'MAC_Telephone',
        headerText: 'Телефон',
        mainText: `+38(055)227-06-50, +38(055)227-19-67`,
        nodeName: 'ТЕЛЕФОН',
        NodeType: 'TELEPHONE',
        parentNode: 'MAC'
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
        id: 'UAKP_filials',
        headerText: 'Філіали',
        mainText: null,
        nodeName: 'ФІЛІАЛИ',
        NodeType: 'FILIAL',
        parentNode: 'UAKP'
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
        id: 'UKR_Metal_Company_filials',
        headerText: 'Філіали',
        mainText: null,
        nodeName: 'ФІЛІАЛИ',
        NodeType: 'FILIAL',
        parentNode: 'UKR_Metal_Company'
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
        id: 'UkrSudProm_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'FILIAL',
        parentNode: 'UkrSudProm'
      },
      {
        id: 'UAKP_1_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'FILIAL',
        parentNode: 'UAKP_1'
      },
      {
        id: 'UAKP_2_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'FILIAL',
        parentNode: 'UAKP_2'
      },
      {
        id: 'UAKP_3_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'FILIAL',
        parentNode: 'UAKP_3'
      },
      {
        id: 'UKR_Metal_Company_1_WhatCreated',
        headerText: 'Засновані компанії',
        mainText: null,
        nodeName: 'ЗАСНОВАНІ КОМПАНІЇ',
        NodeType: 'FILIAL',
        parentNode: 'UKR_Metal_Company_1'
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
        id: 'ViacheslavRomanKonstantinovich_Promoters',
        headerText: 'Засновники',
        mainText: null,
        nodeName: 'ЗАСНОВНИКИ',
        NodeType: 'FIO',
        parentNode: 'ViacheslavRomanKonstantinovich'
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
        id: 'UKR_Metal_Company_2_filials',
        headerText: 'Філіали',
        mainText: null,
        nodeName: 'ФІЛІАЛИ',
        NodeType: 'FILIAL',
        parentNode: 'UKR_Metal_Company_2'
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
        id: 'UKR_Metal_Company_3_filials',
        headerText: 'Філіали',
        mainText: null,
        nodeName: 'ФІЛІАЛИ',
        NodeType: 'FILIAL',
        parentNode: 'UKR_Metal_Company_3'
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
        id: 'ZaharchenkoStanislavVictorovich_Assignees_1',
        headerText: 'Правонаступники',
        mainText: null,
        nodeName: 'ПРАВОНАСТУПНИКИ',
        NodeType: 'ASSIGNEE',
        parentNode: 'ZaharchenkoStanislavVictorovich'
      },
      {
        id: 'ZaharchenkoStanislavVictorovich_WhatCreated_1',
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
        target: 'ZaharchenkoStanislavVictorovich_leaders'
      },
      {
        source: 'ZaharchenkoStanislavVictorovich',
        target: 'ZaharchenkoStanislavVictorovich_leaders'
      },
      {
        source: 'PAT_HSZ_leaders',
        target: 'ChernorukMaximPetrovich_leaders'
      },
      {
        source: 'ChernorukMaximPetrovich',
        target: 'ChernorukMaximPetrovich_leaders'
      },
      {
        source: 'PAT_HSZ_leaders',
        target: 'ViacheslavRomanKonstantinovich_leaders'
      },
      {
        source: 'ViacheslavRomanKonstantinovich',
        target: 'ViacheslavRomanKonstantinovich_leaders'
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
        target: 'MAC_Telephone'
      },
      {
        source: 'MAC',
        target: 'MAC_Telephone'
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
        target: 'UkrSudProm_WhatCreated'
      },
      {
        source: 'UkrSudProm',
        target: 'UkrSudProm_WhatCreated'
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company_filials'
      },
      {
        source: 'UKR_Metal_Company',
        target: 'UKR_Metal_Company_filials'
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UAKP_filials'
      },
      {
        source: 'UAKP',
        target: 'UAKP_filials'
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
        target: 'ViacheslavRomanKonstantinovich_Promoters'
      },
      {
        source: 'ViacheslavRomanKonstantinovich',
        target: 'ViacheslavRomanKonstantinovich_Promoters'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_1_WhatCreated'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_2_WhatCreated'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UAKP_3_WhatCreated'
      },
      {
        source: 'PAT_HSZ_WhatCreated',
        target: 'UKR_Metal_Company_1_WhatCreated'
      },
      {
        source: 'UKR_Metal_Company_1',
        target: 'UKR_Metal_Company_1_WhatCreated'
      },
      {
        source: 'UAKP_1',
        target: 'UAKP_1_WhatCreated'
      },
      {
        source: 'UAKP_2',
        target: 'UAKP_2_WhatCreated'
      },
      {
        source: 'UAKP_3',
        target: 'UAKP_3_WhatCreated'
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company_2_filials'
      },
      {
        source: 'PAT_HSZ_filials',
        target: 'UKR_Metal_Company_3_filials'
      },
      {
        source: 'UKR_Metal_Company_2',
        target: 'UKR_Metal_Company_2_filials'
      },
      {
        source: 'UKR_Metal_Company_3',
        target: 'UKR_Metal_Company_3_filials'
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
        source: 'ZaharchenkoStanislavVictorovich',
        target: 'ZaharchenkoStanislavVictorovich_Assignees_1'
      },
      {
        source: 'ZaharchenkoStanislavVictorovich',
        target: 'ZaharchenkoStanislavVictorovich_WhatCreated_1'
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

export default GraphData();
