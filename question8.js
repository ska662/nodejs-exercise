function is_email(str)
{
  
  regexp = /\S+@\S+\.\S+/  
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}

console.log(is_email("admin@example.com"));
console.log(is_email("mysite@.org.org "));
