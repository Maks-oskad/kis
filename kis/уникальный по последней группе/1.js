// https://smd.mos.ru/participants/805596/view

https://smd.mos.ru/api/v1/participants/groups/805596



arrCandidate = ['805596']
commits = [[],[]]
commits[1] = []
arrCandidate.forEach((e,i) => 
    func1(e,i)
    );
    
     
        async function func1(idLesson_arr, ij){
            intId=parseInt(idLesson_arr,10)
            
            let url = `https://smd.mos.ru/api/v1/participants/groups/${intId}`;
            let response = await fetch(url);
            
            let url2 = `https://smd.mos.ru/api/v1/groups/participants/${intId}/active_groups/ids`;
            let response2 = await fetch(url2);
            
            
            commits[0][ij] = await response.json()
            commits[1] = await response2.json()
            // commits[i] = await response.json() // читаем ответ в формате JSON
        }
    
        commits[0][0] массив со всеми группами [ ]


var active_groups_i = 0
// commits[0][1] = []
for (let i = 0; i < commits[0][0].length; i++) {
   if (commits[1].includes(commits[0][0][i].id)) {//можно убрать эту ячейку, потом фильтр на (boolean)
    commits[0][1][active_groups_i] = commits[0][0][i]
    active_groups_i++
   }

}
