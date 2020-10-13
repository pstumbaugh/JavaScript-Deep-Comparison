function deepEqual(value1, value2)
{
  if (value1 === value2) //if properties are the same, return true immediately;
    return true;
  //else, if both items are objects (and not null)...
  else if ((typeof value1 == "object" && value1 != null) && (typeof value2 == "object" && value2 != null))
      {
        //compare lengths of object.keys(var). If not the same length, we know not equal
        if (Object.keys(value1).length != Object.keys(value2).length)
          return false;
        //iterate through properties in value1...
        for (var p in value1)
        {
          if (value2[p]) //if value2 object has a proptery (not empty)
          {
            //recursively call deepEqual to check that property
            if (!deepEqual(value1[p], value2[p]))
                return false; //if nothing found to be equal, return false
          }
          else //nothing in value1's properties equal anything in value2, return false
            return false;
        }
    // a property in value1 == property in value 2!, return true
    return true;
 }
  else // if the items are not both objects and/or are null, return false
    return false;
}