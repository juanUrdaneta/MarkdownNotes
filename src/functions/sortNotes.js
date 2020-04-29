const sortList = (items, param, forward = true) => {
  switch(param){
    case 'length':
      return items.sort((a,b)=>{//for data length
        if(forward){
          if(a.data.length>b.data.length) return 1;
          if(a.data.length<b.data.length) return -1;
          return 0;
        }
        else{
          if(a.data.length<b.data.length) return 1;
          if(a.data.length>b.data.length) return -1;
          return 0;
        }
      });
    case 'date':
      return items.sort((a,b)=>{//for data length
        if(forward){
          if(a.dateCreated>b.dateCreated) return 1;
          if(a.dateCreated<b.dateCreated) return -1;
          return 0;
        }
        else{
          if(a.dateCreated<b.dateCreated) return 1;
          if(a.dateCreated>b.dateCreated) return -1;
          return 0;
        }
      });
    case 'name':
      return items.sort((a,b)=>{//for data length
        if(forward){
          if(a.name.toLowerCase()>b.name.toLowerCase()) return 1;
          if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
          return 0;
        }
        else{
          if(a.name.toLowerCase()<b.name.toLowerCase()) return 1;
          if(a.name.toLowerCase()>b.name.toLowerCase()) return -1;
          return 0;
        }
      });
    default:
      return {dateCreated:'-1',name:'error',data:'wrong type of data requested.'};
  }
}

export default sortList;