

b = 0
function getF(id) {

   xhr = new XMLHttpRequest();
   xhr.open('GET',
      `https://smd.mos.ru/api/v1/participants/groups/${id}`);

   var el = window.location.href
   var numEl = parseInt(el.match(/\d+/))

   xhr.onload = function () {
      b = JSON.parse(xhr.responseText);
      b.participants.forEach((e) => {
         i = 0
         j = 0
         if (e.id == numEl) {
            i = 0
            e.lessons.forEach((e) => {
               //console.log(e)
               if (e.presenceMark == "PRESENCE") { i++ }
               if (e.presenceMark == "DISMISSED") { j++ }
               if (e.presenceMark == "PRESENCE_EXCEEDS") { j++ }
               if (e.presenceMark == "ABSENT") { j++ }

            })

            if ((i > 0) || (j > 0)) { console.log("+" + i + " -" + j) }
            else { console.log("0 0") }

         }
      });
   };
   xhr.send();
   /////перебор б///////////////////////////////////////////////
   b.forEach((e) => {
      e.schedules.forEach((e) => { console.log(e) })
   })
   ///////////Т Т Т Т Интервалы////////////////////////////////////////

   t1, t2, t3, t4 = 0
   if (t1 < t4 & t3 < t2) {
      // че делать с Т??
   }

   /////////////Нужна база для пересечений групп/////////////////////////////////////


   //////////Также печать в файл эксель?////////////////////


   //localStorage вкладка Applicaion F12
   localStorage.setItem('myCat', 'Tom');
   localStorage.getItem('myCat')
   localStorage.removeItem('myCat')



   let id, lessonId, date, t;

   function User(name) {
      // this = {};  (неявно)

      // добавляет свойства к this
      this.id = id;
      this.lessonId = lessonId;
      this.date = date;
      this.t = t;




      [
         {
            "id": 2028203,
            "code": "G-02028203",
            "organization": {
               "id": 1383,
               "shortTitle": "ООО «Компания «Сириус»",
               "contacts": [

               ],
               "changeDate": false,
               "active": false,
               "anyKbk": false
            },
            "territoryCentre": {
               "id": 996,
               "shortTitle": "ГБУ ТЦСО \"Восточное Измайлово\" филиал \"Измайлово\"",
               "department": {
                  "title": "ДТСЗН города Москвы",
                  "id": 105
               },
               "contacts": [

               ],
               "changeDate": false,
               "active": false,
               "anyKbk": false
            },
            "activity": {
               "id": 439,
               "title": "Музыка",
               "nodes": [

               ],
               "archived": false,
               "activityType": {
                  "key": "CLASSIC",
                  "title": "Основные",
                  "id": 1
               },
               "description": "Занятия по изучению способов усовершенствования музыкальных и вокальных навыков."
            },
            "daysInStatus": 26,
            "coworker": {
               "id": 5294,
               "firstName": "Анастасия",
               "secondName": "Суздальцева",
               "middleName": "Владимировна",
               "isDuplicate": false,
               "mainCoworker": true,
               "mainAdditionalCoworker": false,
               "isSignatory": false,
               "potentialSignatory": false
            },
            "needNote": false,
            "minCountParticipants": 10,
            "maxCountParticipants": 50,
            "planStartDate": "24.12.2020",
            "planEndDate": "31.12.2021",
            "firstEnrollmentDate": "23.12.2020",
            "extend": true,
            "teachers": [
               {
                  "id": 2892168,
                  "firstName": "Яна",
                  "secondName": "Бородина",
                  "middleName": "Валентиновна",
                  "isDuplicate": false,
                  "contacts": [

                  ],
                  "mainCoworker": true,
                  "mainAdditionalCoworker": false,
                  "isSignatory": false,
                  "potentialSignatory": false
               }
            ],
            "places": [
               {
                  "id": 2061021,
                  "title": "ООО «Компания «Сириус»",
                  "address": {
                     "id": 65991,
                     "address": "город Москва, Средняя Первомайская улица, дом 46",
                     "admArea": {
                        "title": "Восточный административный округ",
                        "id": 7
                     },
                     "district": {
                        "title": "муниципальный округ Восточное Измайлово",
                        "id": 7
                     }
                  },
                  "placeType": {
                     "id": 9,
                     "title": "Помещение"
                  }
               }
            ],
            "comment": "Сириус 3",
            "schedules": [

            ],
            "contractId": 2151,
            "activity1Level": {
               "id": 608,
               "title": "Творчество",
               "archived": false,
               "activityType": {
                  "key": "CLASSIC",
                  "title": "Основные",
                  "id": 1
               }
            },
            "activity2Level": {
               "id": 611,
               "title": "Музыка, фольклор",
               "parentId": 608,
               "archived": false,
               "activityType": {
                  "key": "CLASSIC",
                  "title": "Основные",
                  "id": 1
               }
            },
            "enrollmentDate": "23.12.2020",
            "participantsMoved": false,
            "editionId": 2151,
            "teachersAmount": 1,
            "lockEdit": false,
            "dateAddToContract": "2021-09-03"
         },
         {
            "id": 10156,
            "code": "G-00010156",
            "organization": {
               "id": 589,
               "shortTitle": "ГБОУ Школа № 2086",
               "department": {
                  "title": "Департамент образования",
                  "id": 102
               },
               "contacts": [

               ],
               "changeDate": false,
               "active": false,
               "anyKbk": false
            },
            "territoryCentre": {
               "id": 1046,
               "shortTitle": "ГБУ ТЦСО \"Ломоносовский\" филиал \"Гагаринский\"",
               "department": {
                  "title": "ДТСЗН города Москвы",
                  "id": 105
               },
               "contacts": [

               ],
               "changeDate": false,
               "active": false,
               "anyKbk": false
            },
            "activity": {
               "id": 150,
               "title": "Английский язык",
               "nodes": [

               ],
               "archived": false,
               "activityType": {
                  "key": "CLASSIC",
                  "title": "Основные",
                  "id": 1
               },
               "description": "Занятия по изучению лексики и грамматики английского языка с помощью чтения и аудирования."
            },
            "daysInStatus": 25,
            "coworker": {
               "id": 4701,
               "firstName": "Виктория",
               "secondName": "Богачева",
               "middleName": "Борисовна",
               "isDuplicate": false,
               "mainCoworker": true,
               "mainAdditionalCoworker": false,
               "isSignatory": false,
               "potentialSignatory": false
            },
            "needNote": false,
            "minCountParticipants": 15,
            "maxCountParticipants": 30,
            "planStartDate": "19.09.2019",
            "planEndDate": "31.12.2021",
            "firstEnrollmentDate": "26.02.2020",
            "factStartDate": "19.09.2019",
            "factEndDate": "18.09.2021",
            "extend": true,
            "teachers": [
               {
                  "id": 412050,
                  "firstName": "Елена",
                  "secondName": "Бескоровайная",
                  "middleName": "Николаевна",
                  "isDuplicate": false,
                  "contacts": [

                  ],
                  "mainCoworker": true,
                  "mainAdditionalCoworker": false,
                  "isSignatory": false,
                  "potentialSignatory": false
               }
            ],
            "places": [
               {
                  "id": 7243,
                  "title": "Государственное бюджетное общеобразовательное учреждение города Москвы \"Школа № 2086\"",
                  "address": {
                     "id": 3168748,
                     "address": "город Москва, Университетский проспект, дом 3",
                     "admArea": {
                        "title": "Юго-Западный административный округ",
                        "id": 2
                     },
                     "district": {
                        "title": "муниципальный округ Гагаринский",
                        "id": 2
                     }
                  },
                  "placeType": {
                     "id": 1,
                     "title": "Не указано"
                  }
               }
            ],
            "comment": "К0016736-18\nанглийский язык 3 (школа2086)",
            "schedules": [
               {
                  "id": 715769,
                  "daysOfWeekSchedules": [
                     {
                        "id": 1073922,
                        "timesheet": {
                           "startPeriodDate": "19.09.2019",
                           "endPeriodDate": "31.12.2019",
                           "startTime": "17:00",
                           "endTime": "18:00",
                           "pause": 0
                        },
                        "dayOfWeek": "TUESDAY",
                        "place": {
                           "id": 7243,
                           "title": "Государственное бюджетное общеобразовательное учреждение города Москвы \"Школа № 2086\"",
                           "address": {
                              "id": 3168748,
                              "address": "город Москва, Университетский проспект, дом 3",
                              "btiNum": 2101142,
                              "subject": "645611645",
                              "area": {
                                 "parent": {
                                    "arCode": "700",
                                    "aid": 645611636,
                                    "title": "Юго-Западный административный округ",
                                    "objectStatus": {
                                       "title": "Загружен из ЕХД",
                                       "id": 1
                                    },
                                    "id": 2
                                 },
                                 "arCode": "702",
                                 "aid": 645608922,
                                 "title": "муниципальный округ Гагаринский",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 63
                              },
                              "houseNumType": "645613943",
                              "houseNumValue": "3",
                              "admArea": {
                                 "arCode": "700",
                                 "aid": 645611636,
                                 "title": "Юго-Западный административный округ",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 2
                              },
                              "district": {
                                 "parent": {
                                    "arCode": "700",
                                    "aid": 645611636,
                                    "title": "Юго-Западный административный округ",
                                    "objectStatus": {
                                       "title": "Загружен из ЕХД",
                                       "id": 1
                                    },
                                    "id": 2
                                 },
                                 "arCode": "702",
                                 "aid": 645608922,
                                 "title": "муниципальный округ Гагаринский",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 63
                              },
                              "registrationNumber": 6004237,
                              "fiasNumber": "EF8A6EAF-A4C2-4B93-AF1D-764E7A7878F3",
                              "kladr": "77000000000296700",
                              "addressType": "645616817",
                              "condition": "645613418",
                              "status": "645615551",
                              "objectStatus": {
                                 "title": "Загружен из ЕХД",
                                 "id": 1
                              }
                           },
                           "validation": true,
                           "placeType": {
                              "id": 1,
                              "title": "Не указано"
                           }
                        },
                        "coworkers": [
                           {
                              "id": 412050,
                              "firstName": "Елена",
                              "secondName": "Бескоровайная",
                              "middleName": "Николаевна",
                              "isDeputy": false,
                              "isDuplicate": false,
                              "contacts": [

                              ],
                              "mainCoworker": true,
                              "mainAdditionalCoworker": false,
                              "isSignatory": false,
                              "potentialSignatory": false
                           }
                        ],
                        "intergroups": [

                        ]
                     },
                     {
                        "id": 1073923,
                        "timesheet": {
                           "startPeriodDate": "19.09.2019",
                           "endPeriodDate": "31.12.2019",
                           "startTime": "18:00",
                           "endTime": "19:00",
                           "pause": 0
                        },
                        "dayOfWeek": "FRIDAY",
                        "place": {
                           "id": 7243,
                           "title": "Государственное бюджетное общеобразовательное учреждение города Москвы \"Школа № 2086\"",
                           "address": {
                              "id": 3168748,
                              "address": "город Москва, Университетский проспект, дом 3",
                              "btiNum": 2101142,
                              "subject": "645611645",
                              "area": {
                                 "parent": {
                                    "arCode": "700",
                                    "aid": 645611636,
                                    "title": "Юго-Западный административный округ",
                                    "objectStatus": {
                                       "title": "Загружен из ЕХД",
                                       "id": 1
                                    },
                                    "id": 2
                                 },
                                 "arCode": "702",
                                 "aid": 645608922,
                                 "title": "муниципальный округ Гагаринский",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 63
                              },
                              "houseNumType": "645613943",
                              "houseNumValue": "3",
                              "admArea": {
                                 "arCode": "700",
                                 "aid": 645611636,
                                 "title": "Юго-Западный административный округ",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 2
                              },
                              "district": {
                                 "parent": {
                                    "arCode": "700",
                                    "aid": 645611636,
                                    "title": "Юго-Западный административный округ",
                                    "objectStatus": {
                                       "title": "Загружен из ЕХД",
                                       "id": 1
                                    },
                                    "id": 2
                                 },
                                 "arCode": "702",
                                 "aid": 645608922,
                                 "title": "муниципальный округ Гагаринский",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 63
                              },
                              "registrationNumber": 6004237,
                              "fiasNumber": "EF8A6EAF-A4C2-4B93-AF1D-764E7A7878F3",
                              "kladr": "77000000000296700",
                              "addressType": "645616817",
                              "condition": "645613418",
                              "status": "645615551",
                              "objectStatus": {
                                 "title": "Загружен из ЕХД",
                                 "id": 1
                              }
                           },
                           "validation": true,
                           "placeType": {
                              "id": 1,
                              "title": "Не указано"
                           }
                        },
                        "coworkers": [
                           {
                              "id": 412050,
                              "firstName": "Елена",
                              "secondName": "Бескоровайная",
                              "middleName": "Николаевна",
                              "isDeputy": false,
                              "isDuplicate": false,
                              "contacts": [

                              ],
                              "mainCoworker": true,
                              "mainAdditionalCoworker": false,
                              "isSignatory": false,
                              "potentialSignatory": false
                           }
                        ],
                        "intergroups": [

                        ]
                     }
                  ],
                  "timesheet": {
                     "startPeriodDate": "19.09.2019",
                     "endPeriodDate": "31.12.2019",
                     "startTime": "17:00",
                     "endTime": "18:00",
                     "pause": 0
                  },
                  "place": {
                     "id": 7243,
                     "title": "Государственное бюджетное общеобразовательное учреждение города Москвы \"Школа № 2086\"",
                     "address": {
                        "id": 3168748,
                        "address": "город Москва, Университетский проспект, дом 3",
                        "btiNum": 2101142,
                        "subject": "645611645",
                        "area": {
                           "parent": {
                              "arCode": "700",
                              "aid": 645611636,
                              "title": "Юго-Западный административный округ",
                              "objectStatus": {
                                 "title": "Загружен из ЕХД",
                                 "id": 1
                              },
                              "id": 2
                           },
                           "arCode": "702",
                           "aid": 645608922,
                           "title": "муниципальный округ Гагаринский",
                           "objectStatus": {
                              "title": "Загружен из ЕХД",
                              "id": 1
                           },
                           "id": 63
                        },
                        "houseNumType": "645613943",
                        "houseNumValue": "3",
                        "admArea": {
                           "arCode": "700",
                           "aid": 645611636,
                           "title": "Юго-Западный административный округ",
                           "objectStatus": {
                              "title": "Загружен из ЕХД",
                              "id": 1
                           },
                           "id": 2
                        },
                        "district": {
                           "parent": {
                              "arCode": "700",
                              "aid": 645611636,
                              "title": "Юго-Западный административный округ",
                              "objectStatus": {
                                 "title": "Загружен из ЕХД",
                                 "id": 1
                              },
                              "id": 2
                           },
                           "arCode": "702",
                           "aid": 645608922,
                           "title": "муниципальный округ Гагаринский",
                           "objectStatus": {
                              "title": "Загружен из ЕХД",
                              "id": 1
                           },
                           "id": 63
                        },
                        "registrationNumber": 6004237,
                        "fiasNumber": "EF8A6EAF-A4C2-4B93-AF1D-764E7A7878F3",
                        "kladr": "77000000000296700",
                        "addressType": "645616817",
                        "condition": "645613418",
                        "status": "645615551",
                        "objectStatus": {
                           "title": "Загружен из ЕХД",
                           "id": 1
                        }
                     },
                     "validation": true,
                     "placeType": {
                        "id": 1,
                        "title": "Не указано"
                     }
                  },
                  "coworkers": [
                     {
                        "id": 412050,
                        "firstName": "Елена",
                        "secondName": "Бескоровайная",
                        "middleName": "Николаевна",
                        "isDeputy": false,
                        "isDuplicate": false,
                        "contacts": [

                        ],
                        "mainCoworker": true,
                        "mainAdditionalCoworker": false,
                        "isSignatory": false,
                        "potentialSignatory": false
                     }
                  ],
                  "intergroups": [

                  ]
               },
               {
                  "id": 745048,
                  "daysOfWeekSchedules": [
                     {
                        "id": 1122321,
                        "timesheet": {
                           "startPeriodDate": "09.01.2020",
                           "endPeriodDate": "17.02.2020",
                           "startTime": "17:00",
                           "endTime": "18:00",
                           "pause": 0
                        },
                        "dayOfWeek": "TUESDAY",
                        "place": {
                           "id": 7243,
                           "title": "Государственное бюджетное общеобразовательное учреждение города Москвы \"Школа № 2086\"",
                           "address": {
                              "id": 3168748,
                              "address": "город Москва, Университетский проспект, дом 3",
                              "btiNum": 2101142,
                              "subject": "645611645",
                              "area": {
                                 "parent": {
                                    "arCode": "700",
                                    "aid": 645611636,
                                    "title": "Юго-Западный административный округ",
                                    "objectStatus": {
                                       "title": "Загружен из ЕХД",
                                       "id": 1
                                    },
                                    "id": 2
                                 },
                                 "arCode": "702",
                                 "aid": 645608922,
                                 "title": "муниципальный округ Гагаринский",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 63
                              },
                              "houseNumType": "645613943",
                              "houseNumValue": "3",
                              "admArea": {
                                 "arCode": "700",
                                 "aid": 645611636,
                                 "title": "Юго-Западный административный округ",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 2
                              },
                              "district": {
                                 "parent": {
                                    "arCode": "700",
                                    "aid": 645611636,
                                    "title": "Юго-Западный административный округ",
                                    "objectStatus": {
                                       "title": "Загружен из ЕХД",
                                       "id": 1
                                    },
                                    "id": 2
                                 },
                                 "arCode": "702",
                                 "aid": 645608922,
                                 "title": "муниципальный округ Гагаринский",
                                 "objectStatus": {
                                    "title": "Загружен из ЕХД",
                                    "id": 1
                                 },
                                 "id": 63
                              },
                              "registrationNumber": 6004237,
                              "fiasNumber": "EF8A6EAF-A4C2-4B93-AF1D-764E7A7878F3",
                              "kladr": "77000000000296700",
                              "addressType": "645616817",
                              "condition": "645613418",
                              "status": "645615551",
                              "objectStatus": {
                                 "title": "Загружен из ЕХД",
                                 "id": 1
                              }
                           },
                           "validation": true,
                           "placeType": {
                              "id": 1,
                              "title": "Не указано"
                           }
                        },
                        "coworkers": [
                           {
                              "id": 412050,
                              "firstName": "Елена",
                              "secondName": "Бескоровайная",
                              "middleName": "Николаевна",
                              "isDeputy": false,
                              "isDuplicate": false,
                              "contacts": [

                              ],
                              "mainCoworker": true,
                              "mainAdditionalCoworker": false,
                              "isSignatory": false,
                              "potentialSignatory": false
                           }
                        ],
                        "intergroups": [

                        ]
                     },
                     {
                        "id": 1122322,
                        "timesheet":