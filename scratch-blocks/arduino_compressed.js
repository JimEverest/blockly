// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.addReservedWords("_,void,char");Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;Blockly.Arduino.ORDER_ASSIGNMENT=14;
Blockly.Arduino.ORDER_MEMBER=2;Blockly.Arduino.ORDER_FUNCTION_CALL=2;Blockly.Arduino.ORDER_INCREMENT=3;Blockly.Arduino.ORDER_DECREMENT=3;Blockly.Arduino.ORDER_LOGICAL_NOT=3;Blockly.Arduino.ORDER_BITWISE_NOT=3;Blockly.Arduino.ORDER_UNARY_PLUS=3;Blockly.Arduino.ORDER_UNARY_NEGATION=3;Blockly.Arduino.ORDER_MULTIPLICATION=5;Blockly.Arduino.ORDER_DIVISION=5;Blockly.Arduino.ORDER_MODULUS=5;Blockly.Arduino.ORDER_ADDITION=6;Blockly.Arduino.ORDER_SUBTRACTION=6;Blockly.Arduino.ORDER_BITWISE_SHIFT=7;
Blockly.Arduino.ORDER_COMMA=17;Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_HIGH=1;Blockly.Arduino.ORDER_EXPONENTIATION=2;Blockly.Arduino.ORDER_UNARY=3;Blockly.Arduino.ORDER_MULTIPLICATIVE=4;Blockly.Arduino.ORDER_ADDITIVE=5;Blockly.Arduino.ORDER_CONCATENATION=6;Blockly.Arduino.ORDER_RELATIONAL=7;Blockly.Arduino.ORDER_AND=8;Blockly.Arduino.ORDER_OR=9;Blockly.Arduino.ORDER_NONE=99;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_SHIFT=5;
Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.Null=0;Blockly.Arduino.Setup=1;Blockly.Arduino.Loop=2;Blockly.Arduino.INDENT="\t";Blockly.Arduino.END=";\n";Blockly.Arduino.Header="#include <Arduino.h>\n#include <Wire.h>\n#include <SoftwareSerial.h>\n";
Blockly.Arduino.init=function(a){Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.includes_=Object.create(null);Blockly.Arduino.setups_=Object.create(null);Blockly.Arduino.codeStage=Blockly.Arduino.Setup;Blockly.Arduino.tabPos=1;Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_)};
Blockly.Arduino.finish=function(a){var b=[];for(d in Blockly.Arduino.definitions_)b.push(Blockly.Arduino.definitions_[d]);var c=[];for(d in Blockly.Arduino.includes_)c.push(Blockly.Arduino.includes_[d]);var d=Blockly.Arduino.Header;d+=c.join("\n\n");d=d+"\n\n"+b.join("\n\n");d=d+"\n\nvoid setup(){\n"+a+"\n}\n";Blockly.Arduino.codeStage==Blockly.Arduino.Setup&&(d+="\nvoid loop(){\n\n}\n");delete Blockly.Arduino.definitions_;delete Blockly.Arduino.includes_;delete Blockly.Arduino.codeStage;Blockly.Arduino.variableDB_.reset();
return d};Blockly.Arduino.scrub_=function(a,b){a=a.nextConnection&&a.nextConnection.targetBlock();a=Blockly.Arduino.blockToCode(a);return b+a};Blockly.Arduino.scrubNakedValue=function(a){return a+"\n"};Blockly.Arduino.quote_=function(a){return a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/%/g,"\\%").replace(/'/g,"\\'")};Blockly.Arduino.tab=function(){return Blockly.Arduino.INDENT.repeat(Blockly.Arduino.tabPos)};Blockly.Arduino.arduino={};Blockly.Arduino.arduino_pin_mode=function(a){var b=Blockly.Arduino.ORDER_NONE,c=Blockly.Arduino.valueToCode(a,"PINNUM",b);a=Blockly.Arduino.valueToCode(a,"ARDUINO_PIN_MODE_OPTION",b);return Blockly.Arduino.tab()+"pinMode("+c+","+a+")"+Blockly.Arduino.END};
Blockly.Arduino.arduino_pwm_write=function(a){var b=Blockly.Arduino.ORDER_NONE,c=Blockly.Arduino.valueToCode(a,"ARDUINO_PWM_OPTION",b);a=Blockly.Arduino.valueToCode(a,"PWM",b);return Blockly.Arduino.tab()+"analogWrite("+c+","+a+")"+Blockly.Arduino.END};Blockly.Arduino.arduino_digital_write=function(a){var b=Blockly.Arduino.ORDER_NONE,c=Blockly.Arduino.valueToCode(a,"PINNUM",b);a=Blockly.Arduino.valueToCode(a,"ARDUINO_LEVEL_OPTION",b);return Blockly.Arduino.tab()+"digitalWrite("+c+","+a+")"+Blockly.Arduino.END};
Blockly.Arduino.arduino_digital_read=function(a){var b=Blockly.Arduino.ORDER_NONE;return["digitalRead("+Blockly.Arduino.valueToCode(a,"PINNUM",b)+")",b]};Blockly.Arduino.arduino_pin_value=function(a){var b=Blockly.Arduino.ORDER_NONE;return["digitalRead("+Blockly.Arduino.valueToCode(a,"PINNUM",b)+")",b]};Blockly.Arduino.arduino_analog_read=function(a){var b=Blockly.Arduino.ORDER_NONE;return["analogRead("+Blockly.Arduino.valueToCode(a,"PINNUM",b)+")",b]};
Blockly.Arduino.arduino_map=function(a){var b=Blockly.Arduino.ORDER_NONE,c=Blockly.Arduino.valueToCode(a,"VAL",b),d=Blockly.Arduino.valueToCode(a,"FROMLOW",b),e=Blockly.Arduino.valueToCode(a,"FROMHIGH",b),f=Blockly.Arduino.valueToCode(a,"TOLOW",b);a=Blockly.Arduino.valueToCode(a,"TOHIGH",b);return Blockly.Arduino.tab()+"map("+c+","+d+","+e+","+f+","+a+")"};
Blockly.Arduino.arduino_tone=function(a){var b=Blockly.Arduino.ORDER_NONE,c=Blockly.Arduino.valueToCode(a,"PINNUM",b),d=Blockly.Arduino.valueToCode(a,"FREQUENCY",b);a=Blockly.Arduino.valueToCode(a,"DURATION",b);return Blockly.Arduino.tab()+"tone("+c+","+d+","+a+")"+Blockly.Arduino.END};
Blockly.Arduino.arduino_servo=function(a){var b=Blockly.Arduino.ORDER_NONE;Blockly.Arduino.includes_.servo="#include <Servo.h>";Blockly.Arduino.definitions_.servo="Servo servo;";var c=Blockly.Arduino.valueToCode(a,"PINNUM",b);a=Blockly.Arduino.valueToCode(a,"ANGLE",b);c=Blockly.Arduino.tab()+"servo.attach("+c+")"+Blockly.Arduino.END;return c+=Blockly.Arduino.tab()+"servo.write("+a+")"+Blockly.Arduino.END};Blockly.Arduino.arduino_menu_option=function(a){return a.inputList[0].fieldRow[0].value_};
Blockly.Arduino.arduino_println=function(a){a=Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_NONE);var b=Blockly.Arduino.tab()+"Serial.println("+a+")"+Blockly.Arduino.END;console.log("#########arduino_println#######",a);return b};Blockly.Arduino.arduino_print=function(a){a=Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_NONE);return Blockly.Arduino.tab()+"Serial.print("+a+")"+Blockly.Arduino.END};
Blockly.Arduino.arduino_setBaudrate=function(a){a=Blockly.Arduino.valueToCode(a,"BAUDRATE",Blockly.Arduino.ORDER_NONE);return Blockly.Arduino.tab()+"Serial.begin("+a+")"+Blockly.Arduino.END};Blockly.Arduino.arduino_setBaudrate2=function(a){a=Blockly.Arduino.valueToCode(a,"BAUDRATE",Blockly.Arduino.ORDER_NONE);return Blockly.Arduino.tab()+"Serial2.begin("+a+")"+Blockly.Arduino.END};Blockly.Arduino.arduino_serial_available=function(a){return["Serial.available()",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.arduino_serial_read=function(a){return["Serial.read()",Blockly.Arduino.ORDER_NONE]};Blockly.Arduino.arduino_pin_mode_option=Blockly.Arduino.arduino_menu_option;Blockly.Arduino.arduino_pwm_option=Blockly.Arduino.arduino_menu_option;Blockly.Arduino.arduino_level_option=Blockly.Arduino.arduino_menu_option;Blockly.Arduino.arduino_analog_in_option=Blockly.Arduino.arduino_menu_option;Blockly.Arduino.control={};Blockly.Arduino.control_wait=function(a){a=Blockly.Arduino.valueToCode(a,"DURATION",Blockly.Arduino.ORDER_HIGH)+"*1000";return Blockly.Arduino.tab()+"delay("+a+")"+Blockly.Arduino.END};
Blockly.Arduino.control_repeat=function(a){var b=Blockly.Arduino.valueToCode(a,"TIMES",Blockly.Arduino.ORDER_HIGH),c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);a=Blockly.Arduino.tab()+"for(int i=0;i<"+b+";i++){\n";Blockly.Arduino.tabPos++;Blockly.Arduino.tabPos--;return a=a+c+(Blockly.Arduino.tab()+"}\n")};
Blockly.Arduino.control_forever=function(a){if(Blockly.Arduino.codeStage!=Blockly.Arduino.Loop){Blockly.Arduino.codeStage=Blockly.Arduino.Loop;Blockly.Arduino.tabPos=0;var b=Blockly.Arduino.statementToCode(a,"SUBSTACK");b=Blockly.Arduino.addLoopTrap(b,a.id);c="\n}\n\nvoid loop(){\n"+b}else{var c=Blockly.Arduino.tab()+"while(1){\n";Blockly.Arduino.tabPos++;b=Blockly.Arduino.statementToCode(a,"SUBSTACK");b=Blockly.Arduino.addLoopTrap(b,a.id);Blockly.Arduino.tabPos--;c=c+b+(Blockly.Arduino.tab()+"}\n")}return c};
Blockly.Arduino.control_if=function(a){var b=Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);a=Blockly.Arduino.tab()+"if("+b+"){\n";Blockly.Arduino.tabPos++;Blockly.Arduino.tabPos--;return a=a+c+(Blockly.Arduino.tab()+"}\n")};
Blockly.Arduino.control_if_else=function(a){var b=Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);var d=Blockly.Arduino.statementToCode(a,"SUBSTACK2");d=Blockly.Arduino.addLoopTrap(d,a.id);a=Blockly.Arduino.tab()+"if("+b+"){\n";Blockly.Arduino.tabPos++;Blockly.Arduino.tabPos--;a=a+c+(Blockly.Arduino.tab()+"}else{\n");Blockly.Arduino.tabPos++;Blockly.Arduino.tabPos--;return a=a+d+(Blockly.Arduino.tab()+
"}\n")};Blockly.Arduino.control_wait_until=function(a){var b=Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_HIGH),c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);a=Blockly.Arduino.tab()+"while("+b+"){\n";Blockly.Arduino.tabPos++;Blockly.Arduino.tabPos--;return a=a+c+(Blockly.Arduino.tab()+"}\n")};
Blockly.Arduino.control_repeat_until=function(a){var b=Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);a=Blockly.Arduino.tab()+"while(!("+b+"){\n";Blockly.Arduino.tabPos++;Blockly.Arduino.tabPos--;return a=a+c+(Blockly.Arduino.tab()+"}\n")};Blockly.Arduino.control_stop=function(a){return Blockly.Arduino.tab()+"while(1);\n"};
Blockly.Arduino.control_break=function(a){return Blockly.Arduino.tab()+"break;\n"};
Blockly.Arduino.control_step_for=function(a){a=Blockly.Arduino.valueToCode(this,"VAR",Blockly.Arduino.ORDER_ASSIGNMENT)||"i";var b=Blockly.Arduino.valueToCode(this,"FROM",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",c=Blockly.Arduino.valueToCode(this,"TO",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",d=Blockly.Arduino.valueToCode(this,"STEP",Blockly.Arduino.ORDER_ASSIGNMENT)||"1",e=Blockly.Arduino.statementToCode(this,"SUBSTACK");Blockly.Arduino.INFINITE_LOOP_TRAP&&(e=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
"'"+this.id+"'")+e);return b.match(/^-?\d+(\.\d+)?$/)&&c.match(/^-?\d+(\.\d+)?$/)?"for (int "+a+" = "+b+"; "+a+(0>c-b?" >= ":" <= ")+c+"; "+a+" = "+a+" + ("+d+")) {\n"+e+"}\n":d.match(/^-?\d+(\.\d+)?$/)?"for (int "+a+" = ("+b+"); "+a+(0>d?" >= ":" <= ")+"("+c+"); "+a+" = "+a+" + ("+d+")) {\n"+e+"}\n":"for (int "+a+" = ("+b+"); ("+c+">="+b+")?("+a+"<="+c+"):("+a+">="+c+"); "+a+" = "+a+" + ("+d+")) {\n"+e+"}\n"};Blockly.Arduino.data={};Blockly.Arduino.data_variable=function(a){a=a.getField("VARIABLE").text_;Blockly.Arduino.definitions_.addDeclareVariable="int "+a+Blockly.Arduino.END;return a};Blockly.Arduino.addDeclareVariable=function(a){a="int "+a.getField("VARIABLE").text_+Blockly.Arduino.END;Blockly.Arduino.definitions_.addDeclareVariable=a};
Blockly.Arduino.data_setvariableto=function(a){var b=a.getField("VARIABLE").text_;Blockly.Arduino.definitions_.addDeclareVariable="int "+b+Blockly.Arduino.END;a=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_NONE);return Blockly.Arduino.tab()+b+" = "+a+Blockly.Arduino.END};
Blockly.Arduino.data_changevariableby=function(a){var b=a.getField("VARIABLE").text_;Blockly.Arduino.definitions_.addDeclareVariable="int "+b+Blockly.Arduino.END;a=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_NONE);return Blockly.Arduino.tab()+b+" += "+a+Blockly.Arduino.END};Blockly.Arduino.data_showvariable=function(a){return""};Blockly.Arduino.data_hidevariable=function(a){return""};Blockly.Arduino.data_listcontents=function(a){return a.getField("LIST").text_};
Blockly.Arduino.data_listindexall=function(a){return"data_listindexall"};Blockly.Arduino.data_listindexrandom=function(a){return"data_listindexrandom"};Blockly.Arduino.data_addtolist=function(a){var b=Blockly.Arduino.valueToCode(a,"ITEM",Blockly.Arduino.ORDER_NONE);a=a.getField("LIST").text_;return Blockly.Arduino.tab()+b+" += "+a+Blockly.Arduino.END};Blockly.Arduino.data_deleteoflist=function(a){return"data_deleteoflist"};Blockly.Arduino.data_deletealloflist=function(a){return"data_deletealloflist"};
Blockly.Arduino.data_insertatlist=function(a){return"data_insertatlist"};Blockly.Arduino.data_replaceitemoflist=function(a){return"data_replaceitemoflist"};Blockly.Arduino.data_itemoflist=function(a){return"data_itemoflist"};Blockly.Arduino.data_itemnumoflist=function(a){return"data_itemnumoflist"};Blockly.Arduino.data_lengthoflist=function(a){return"data_lengthoflist"};Blockly.Arduino.data_listcontainsitem=function(a){return"data_listcontainsitem"};Blockly.Arduino.data_showlist=function(a){return""};
Blockly.Arduino.data_hidelist=function(a){return""};Blockly.Arduino.event={};Blockly.Arduino.event_whenflagclicked=function(a){return""};Blockly.Arduino.lists={};Blockly.Arduino.lists_create_with_text=function(a){var b=Blockly.Arduino.ORDER_NONE,c=a.getFieldValue("TYPE"),d=Blockly.Arduino.valueToCode(a,"VAR",b),e=Blockly.Arduino.valueToCode(a,"SIZE",b);a=Blockly.Arduino.valueToCode(a,"TEXT",b);Blockly.Arduino.definitions_["var_lists"+d]=c+" "+d+"["+e+"]={"+a+"};\n";return""};
Blockly.Arduino.lists_getIndex=function(a){var b=Blockly.Arduino.ORDER_NONE,c=Blockly.Arduino.valueToCode(a,"VAR",b);a=Blockly.Arduino.valueToCode(a,"AT",b);return[c+"[(int)("+a+")]",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.lists_setIndex=function(a){var b=Blockly.Arduino.ORDER_NONE,c=Blockly.Arduino.valueToCode(a,"VAR",b),d=Blockly.Arduino.valueToCode(a,"AT",b);a=Blockly.Arduino.valueToCode(a,"TO",b);return Blockly.Arduino.tab()+c+"[(int)("+d+")] = "+a+Blockly.Arduino.END};
Blockly.Arduino.lists_length=function(a){a=Blockly.Arduino.valueToCode(a,"VAR",Blockly.Arduino.ORDER_NONE);return["sizeof("+a+")/sizeof("+a+"[0])",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.operator={};Blockly.Arduino.math_number=function(a){return[parseFloat(a.getFieldValue("NUM")),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.text=function(a){return[Blockly.Arduino.quote_(a.getFieldValue("TEXT")),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.operator_random=function(a){var b=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_HIGH)||"0";a=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_HIGH)||"0";return["random("+b+","+a+")",Blockly.Arduino.ORDER_HIGH]};
Blockly.Arduino.operator_compare=function(a){var b=Blockly.Arduino.valueToCode(a,"OPERAND1",Blockly.Arduino.ORDER_HIGH)||"0",c=Blockly.Arduino.valueToCode(a,"OPERAND2",Blockly.Arduino.ORDER_HIGH)||"0";return[b+{operator_gt:">",operator_equals:"==",operator_lt:"<"}[a.type]+c,Blockly.Arduino.ORDER_RELATIONAL]};
Blockly.Arduino.operator_arithmetic=function(a){var b=Blockly.Arduino.valueToCode(a,"NUM1",Blockly.Arduino.ORDER_HIGH)||"0",c=Blockly.Arduino.valueToCode(a,"NUM2",Blockly.Arduino.ORDER_HIGH)||"0",d=Blockly.Arduino.ORDER_ADDITIVE;"operator_multiply"!=a.type&&"operator_divide"!=a.type||--d;return[b+{operator_add:"+",operator_subtract:"-",operator_multiply:"*",operator_divide:"/"}[a.type]+c,d]};
Blockly.Arduino.operator_and=function(a){var b=Blockly.Arduino.valueToCode(a,"OPERAND1",Blockly.Arduino.ORDER_HIGH)||"0";a=Blockly.Arduino.valueToCode(a,"OPERAND2",Blockly.Arduino.ORDER_HIGH)||"0";return["("+b+"&&"+a+")",Blockly.Arduino.ORDER_HIGH]};Blockly.Arduino.operator_or=function(a){var b=Blockly.Arduino.valueToCode(a,"OPERAND1",Blockly.Arduino.ORDER_HIGH)||"0";a=Blockly.Arduino.valueToCode(a,"OPERAND2",Blockly.Arduino.ORDER_HIGH)||"0";return["("+b+"||"+a+")",Blockly.Arduino.ORDER_HIGH]};
Blockly.Arduino.operator_not=function(a){return["(!"+(Blockly.Arduino.valueToCode(a,"OPERAND",Blockly.Arduino.ORDER_HIGH)||"0")+")",Blockly.Arduino.ORDER_HIGH]};
Blockly.Arduino.operator_mathop=function(a){var b=a.getFieldValue("OPERATOR");a=Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_HIGH)||"0";return["sin"==b||"cos"==b||"tan"==b?b+"("+a+" / 180.0 * 3.141592653)":"asin"==b||"acos"==b||"atan"==b?b+"("+a+") / 3.141592653 * 180.0":"ln"==b?"log("+a+")":"log"==b?"log("+a+") / log(10)":"e ^"==b?"exp("+a+")":"10 ^"==b?"pow(10,"+a+")":b+"("+a+")",Blockly.Arduino.ORDER_HIGH]};
Blockly.Arduino.operator_join=function(a){var b=Blockly.Arduino.valueToCode(a,"STRING1",Blockly.Arduino.ORDER_HIGH);a=Blockly.Arduino.valueToCode(a,"STRING2",Blockly.Arduino.ORDER_HIGH);return['(String("'+b+'") + String("'+a+'"))',Blockly.Arduino.ORDER_HIGH]};Blockly.Arduino.operator_letter_of=function(a){var b=Blockly.Arduino.valueToCode(a,"LETTER",Blockly.Arduino.ORDER_HIGH);return['("'+Blockly.Arduino.valueToCode(a,"STRING",Blockly.Arduino.ORDER_HIGH)+'".charAt('+b+"))",Blockly.Arduino.ORDER_HIGH]};
Blockly.Arduino.operator_length=function(a){return['(strlen("'+Blockly.Arduino.valueToCode(a,"STRING",Blockly.Arduino.ORDER_HIGH)+'")',Blockly.Arduino.ORDER_HIGH]};Blockly.Arduino.operator_contains=function(a){var b=Blockly.Arduino.valueToCode(a,"STRING1",Blockly.Arduino.ORDER_HIGH);a=Blockly.Arduino.valueToCode(a,"STRING2",Blockly.Arduino.ORDER_HIGH);return["("+b+"&&"+a+")",Blockly.Arduino.ORDER_HIGH]};
Blockly.Arduino.operator_mod=function(a){var b=Blockly.Arduino.valueToCode(a,"NUM1",Blockly.Arduino.ORDER_HIGH);a=Blockly.Arduino.valueToCode(a,"NUM2",Blockly.Arduino.ORDER_HIGH);return["("+b+"%"+a+")",Blockly.Arduino.ORDER_HIGH]};Blockly.Arduino.operator_round=function(a){return["(round("+Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_HIGH)+"))",Blockly.Arduino.ORDER_HIGH]};Blockly.Arduino.operator_mathop=function(a){a.getFieldValue("OPERATOR");Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_HIGH)};
Blockly.Arduino.operator_add=Blockly.Arduino.operator_arithmetic;Blockly.Arduino.operator_subtract=Blockly.Arduino.operator_arithmetic;Blockly.Arduino.operator_multiply=Blockly.Arduino.operator_arithmetic;Blockly.Arduino.operator_divide=Blockly.Arduino.operator_arithmetic;Blockly.Arduino.operator_gt=Blockly.Arduino.operator_compare;Blockly.Arduino.operator_equals=Blockly.Arduino.operator_compare;Blockly.Arduino.operator_lt=Blockly.Arduino.operator_compare;Blockly.Arduino.math_angle=Blockly.Arduino.math_number;
Blockly.Arduino.math_positive_number=Blockly.Arduino.math_number;Blockly.Arduino.math_whole_number=Blockly.Arduino.math_number;Blockly.Arduino.procedures={};Blockly.Arduino.Str2Code=function(a){if(""===a)return"";var b=[];b.push("0x");for(var c=0;c<a.length;c++)b.push(a.charCodeAt(c).toString(16)+"_");return b.join("")};Blockly.Arduino.procedures_call=function(a){var b=a.inputList[0].fieldRow[0].text_;b=Blockly.Arduino.Str2Code(b);for(var c=null,d=0;d<a.argumentIds_.length;++d){var e=Blockly.Arduino.valueToCode(a,a.argumentIds_[d],Blockly.Arduino.ORDER_NONE)||"null";c=c?c+", "+e:""+e}return"    "+b+"("+c+")"+Blockly.Arduino.END};
Blockly.Arduino.argument_reporter_boolean=function(a){a=a.getFieldValue("VALUE");return[Blockly.Arduino.Str2Code(a),Blockly.Arduino.ORDER_NONE]};Blockly.Arduino.argument_reporter_string_number=function(a){a=a.getFieldValue("VALUE");return[Blockly.Arduino.Str2Code(a),Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.procedures_definition=function(a){for(var b=null,c=a.getInputTargetBlock("custom_block"),d=c.getChildren(),e=0;e<d.length;++e){var f=d[e],g=Blockly.Arduino[f.type].call(f,f)[0];switch(f.type){case "argument_reporter_boolean":b=b?b+", bool "+g:"bool "+g;break;case "argument_reporter_string_number":b=b?b+", float "+g:"float "+g}}c=c.inputList[0].fieldRow[0].text_;c=Blockly.Arduino.Str2Code(c);a=Blockly.Arduino.scrub_(a,"float "+c+"("+b+")\n{\n");a=a+"}"+Blockly.Arduino.END;Blockly.Arduino.definitions_["%"+
c]=a};