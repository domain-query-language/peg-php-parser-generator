
Name = name:[A-Za-z0-9_-]+ 
  { 
    return ["name"=>join("", $name)]; 
  }