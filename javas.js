function onChange(value){
    this.inputValue = value;
    const range = new dateRange();
    range.onChange(inputValue);
}
class dateRange{
    
    constructor(){
        this.container = document.querySelector('.containerForLastUpdateRecordAndPeriodItems');
    }
    createItems(value) {
        let period = value;
        let dates = [];
        var i = +period.start;
        while (i < +period.end){
            
            switch (period.start.getDay()){
                case 0: 
                dates.push(i);
                i+=3600000 * 24;
                        period.start.setHours(24);
                    break;
                case 1: dates.push(i);
                i+= 3600000 * 168;
                        period.start.setHours(168);
                    break;
                case 2: dates.push(i);
                i+= 3600000 * 144;
                        period.start.setHours(144);
                    break;
                case 3: dates.push(i);
                i+= 3600000 * 120;
                        period.start.setHours(120);
                    break;
                case 4: dates.push(i);
                i+= 3600000 * 96;
                        period.start.setHours(96);
                    break;
                case 5: dates.push(i);
                i+= 3600000 * 72;
                        period.start.setHours(72);
                    break;
                case 6: dates.push(i);
                i+= 3600000 * 48;
                        period.start.setHours(48);
                    break;
            }
            
        }
        let periods = [];
        for( var i=0;i<dates.length;i++) {
            let date = new Date(dates[i]);
            switch (date.getDay()){
                case 1:
                    periods[i] = `${date.toLocaleDateString()} - ${date = new Date(date.setHours(144)).toLocaleDateString()}`;
                break;
                case 2:
                    periods[i] = `${date.toLocaleDateString()} - ${date = new Date(date.setHours(120)).toLocaleDateString()}`;
                break;
                case 3:
                    periods[i] = `${date.toLocaleDateString()} - ${date = new Date(date.setHours(96)).toLocaleDateString()}`;
                break;
                case 4:
                    periods[i] = `${date.toLocaleDateString()} - ${date = new Date(date.setHours(72)).toLocaleDateString()}`;
                break;
                case 5:
                    periods[i] = `${date.toLocaleDateString()} - ${date = new Date(date.setHours(48)).toLocaleDateString()}`;
                break;
                case 6:
                    periods[i] = `${date.toLocaleDateString()} - ${date = new Date(date.setHours(24)).toLocaleDateString()}`;
                break;
                case 0:
                    periods[i] = `${date.toLocaleDateString()}`;
            }
        }        
        return periods;
    }

    renderItems(items){
        var element;
        this.container.innerHTML = `Последнее изменение: ${this.updateTime}`;
        items.forEach(function(item){
            let contr = document.querySelector('.containerForLastUpdateRecordAndPeriodItems');
            contr.innerHTML += "<br />" + item;
        });
    }
    onChange(value) {
        let updateTime = new Date();
        var dd = String(updateTime.getDate()).padStart(2, '0');
        var mm = String(updateTime.getMonth()+1).padStart(2,'0');
        var yyyy = updateTime.getFullYear();
        this.updateTime = mm+'/' + dd + '/'+yyyy;
        this.renderItems(this.createItems(this.createPeriod(value)));
    }
    createPeriod(date){
        var startDate = new Date(date);
        var endDate = new Date(date);
        endDate.setFullYear(endDate.getFullYear() + 1);
        return{
            start: startDate,
            end: endDate
        }
    }
}

