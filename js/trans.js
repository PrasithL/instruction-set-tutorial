/*
* Author: Prasith Lakshan - 2015
*/

var n = 0;

// this array contains the descriptions loaded into the view on button clicks
var content = [];
content[0] = "<p>Most modern processors work on fetch-decode-execute principle. This is also called Von Neumann Architecture.</p>When a set of instructions is to be executed, the instructions and data are loaded in main memory. The address of the first instruction is copied into the program counter. The execution of an instruction by a processor is divided in three parts. These parts are fetching, decode and execute.";
content[1] = "<p><strong>1. Fetch</strong></p><p>First step the CPU carries out is to fetch some data and instructions (program) from main memory then store them in its own internal temporary memory areas. These memory areas are called 'registers'.</p><p> The CPU places the address of the next item to be fetched on to the address bus. </p><p>Data from this address then moves from main memory into the CPU. </p><p>You could imagine that it is a bit like a boat attendant at a lake calling in customers when their time is up -- &quot;Boat number 3, time to come in!&quot; The 'address' of the boat is 3 and the 'data' is its content. The boat is parked at a pier, which is like the internal register of the CPU. </p>";
content[2] = "<p><strong>2. Decode</strong></p><p>    The next step is for the CPU to make sense of the instruction it has just fetched. </p><p>This process is called 'decode'. </p><p>The CPU is designed to understand a specific set of commands. These are called the 'instruction set' of the CPU. Each make of CPU has a different instruction set.</p><p>   The CPU decodes the instruction and prepares various areas within the chip in readiness of the next step.</p><p>&nbsp;</p>";
content[3] = "<p><strong>3. Execute</strong></p><p>    This is the part of the cycle when data processing actually takes place. The instruction is carried out upon the data (executed). The result of this processing is stored in yet another register. </p><p>Once the execute stage is complete, the CPU sets itself up to begin another cycle once more.  </p><p>&nbsp;</p>";
content[4] = "<p>This flow chart includes the main activities which happen in each phase of the cycle</p><p>And at the end, the cycle starts all over again.</p>";
content[5] = "<p>Now let's take a closer look at how this Fetch-Decode-Execute cycle work using a simplified model of a processor.</p><p>We are going to add two numbers together with the help of this processor. From this example you'll be able to identify how each part of the processor work together to complete the calculation.</p><p>But, since we are using a simplified processor, the cycle is also simplified. A real Fetch-Decode-Execute cycle can be very complex, but the basic idea is the same.</p><p>This programme will store our two values (10, 20) in variables, and then add them and store the answer in another variable.</p><p>x = 10<br/>y = 20<br/>z = x + y</p>";
content[6] = "<p>You might have already noticed that the RAM has already been filled with some data, from the memory addresses 8 to 14. These are the instructions of the programme that we are about to run. </p><p>The register called the 'Programme Counter(PC)' is used to store the memory addresses of the instructions. After every cycle the PC is incremented by 1, unless any interrupts or exceptions occur.</p><p>For this example, we are assuming that the PC's current value is 8, which is the address of the first instruction of our programme.</p>";
content[7] = "<p>Now the 'Fetch' part of the cycle is in progress.</p><p>The PC sends the memory address to the 'Memory Address Register(MAR)'. MAR then sends the Address to the RAM to retrieve/fetch the data.</p>";
content[8] = "<p>The data is then sent via the data bus into the 'Memory Buffer Register(MBR)'. The duty of MBR is to store data temporarily.</p><p>Then this data/instruction is sent to the 'Instruction Register(IR)'</p>";
content[9] = "<p>The IR and PC are registers in the 'Control Unit(CU)' of the processor(the grey rectangle represents the control unit), and are controlled and used by CU.</p><p>The instruction in the IR is decoded by the CU and then it carries out the necessary actions(Decode-Execute)</p><p>In our programme the instruction LOAD 10 means, 'temporarily store the value 10 in a register'. In our processor that register is the 'Accumulator(AC)'. So, the CU then stores the value 10 in the AC.</p><p>Now our first Fetch-Decode-Execute cycle is over, so now the PC is incremented by 1, making its value(memory address) 9.</p>";
content[10] = "<p>Now another new Fetch-Decode-Execute cycles starts all over again.</p><p>Now the memory address in the PC is 9. Just like in the last cycle, PC pass the address to the MAR, which in turn passes it along to the RAM</p>";
content[11] = "<p>The RAM then sends the data to the MBR. Just as in the last cycle MBR passes the data to the IR.</p><p>Then the data is Decoded and Executed by the CU.</p><p>In this cycle the instruction is 'STORE MEM[#1]', which means 'Store the data that is temporarily stored in the AC to the memory address '1' in the RAM'.</p>";
content[12] = "<p>The CU then sends an instruction to the AC which will move the data stored in the AC to MBR.</p><p>And another instruction to the MAR with the memory address in which the data in the MBR should be stored.</p><p>The CU can't directly access the RAM. This is because the clock speed of the RAM is almost always slower than of the processor. But, registers usually have a clock speeds that are only slightly slower than the speed of the processor. So, they act as agents between the RAM and the CU to increase the performance. </p><p>When an instruction is Decoded and Executed in the CU the PC is incremented by 1, if there are no interrupts or exceptions.</p>";
content[13] = "<p>The data and the address will be sent via the data bus to the RAM and stored in the specified location.</p><p>So, now we have successfully stored our first variable in the RAM. It took our processor 2 Fetch-Decode-Execute cycles to complete this step.</p><p></p>";
content[14] = "<p>The cycles for loading and storing the value '20' is the same as the cycles we just looked at in the previous sections. So, instead of going through all the cycles all over again, let's just assume that the cycles for loading and storing '20' is completed and value '20' is successfully stored in the RAM.</p><p>Now we have our two values stored in specified addresses in the RAM. The next thing the programme have to do is add those two values together with the help of the processor. So, let's move on to that.</p>";
content[15] = "<p>The values we stored in the RAM must be once again loaded back into the processor for the calculation. we will first be loading the first value(10) and then load the value (20) and add them together in the 'Arithmetic & Logic Unit(ALU)'.</p><p>You might be thinking why we stored the values in the RAM if we're going to load them back once again. Why couldn't we just do it in one run?</p><p>It would be simple and fast wouldn't it?. load '10' and store in the AC, load '20' and add them together in the ALU and store only the final answer in the RAM!</p><p>Unfortunately, it isn't that simple. In a real processor hundreds of thousands of instructions are processed per second and many interrupts and exceptions occur which require the attention of the processor. So, the processor have to switch between many programmes just like ours, and the registers must be available for them to be used. That is why we store these values in the RAM. So even if our programme is interrupted, the processor can carry on from where it left off. </p>"
content[16] = "<p>Let's begin the cycle!</p><p>PC already have the address(12) of the next instruction. Now you know the drill, PC pass the address to the MAR, MAR sends the address to the RAM, RAM sends the data to the MBR, then MBR sends the data to the IR, completing the Fetch phase.</p>";
content[17] = "<p>The IR decodes the instruction. This instruction means, 'get the value stored in memory address '1', and store it in the AC'.</p><p>The CU will send the address to the MAR, and then it will be passed along in to the RAM. RAM will send the value stored in the address '1' to the MBR. Since this isn't an instruction the value will be sent to the AC to be stored.</p><p>As always, when an execution happens the PC will increment by 1.</p>";
content[18] = "<p>The address in the PC is now '13'. So, let's fetch the data stored in it.</p><p>You don't need me to guide you along, do you?</p><p>This is same as every other fetch cycle. Begins in PC and ends in IR.</p>";
content[19] = "<p>Now the CU will decode the instruction and execute it. this instruction means, 'get the value in address '2' and add it to the value currently in the CU'</p><p>The value will be passed on to the ALU from the MBR. And the ALU will add the two values together.</p><p>The PC will increment by 1.</p>";
content[20] = "<p>ALU have stored the answer in the AC. And our programme is almost complete, there is only one instruction left.</p><p>It took our processor 6 Fetch-Decode-Execute cycles to get here. And with the last instruction it will be 7 cycles.</p><p>So, What are we waiting for, let's finish this up!<p/> ";
content[21] = "<p>Let's fetch the instruction first.</p>";
content[22] = "<p>This instruction means, 'store the value in AC to memory address '3' in the RAM'.</p><p>CU will decode and execute the instruction just as before. CU sends the address to the MAR, and sends the data in the AC to the MBR. And, as the final step, the answer will be stored in the specified memory location and our programme will be completed.</p>";
content[23] = "<p>This idea of the Fetch-Decode-Execute cycles is what enabled the early researchers to build programmable computers. And it has helped computers become faster and faster and helped us to run many programmes in the same computer.</p><p>We hope you now understand what Fetch-Decode-Execute cycle is, and how it help a programme to run. Please note that the model we used is a very simplified one and also the programme instructions. But as noted earlier basic principles are the same.</p><p></p>";
content[24] = "<p>You have finished the lessons!</p><p>Press 'Restart' to go back to the start page.</p>";

// this array holds the titles of each view
// content of this array and 'content' array are linked by the index value
var head = [];
head[0] = "Introduction";
head[5] = "Example Programme"
head[7] = "Fetch Phase"
head[9] = "Decode-Execute Phase";
head[10] = "Fetch Phase";
head[12] = "Decode-Execute Phase";
head[14] = "Processing the Second Value";
head[15] = "An Interesting Question!"
head[16] = "Fetch Phase";
head[17] = "Decode-Execute Phase";
head[18] = "Fetch Phase";
head[19] = "Decode-Execute Phase";
head[20] = "Almost There!";
head[21] = "Last Fetch Phase";
head[22] = "Last Decode-Execute Phase";
head[23] = "Note"
head[24] = "";


$(document).ready(function(){ 
	// when 'start' button is clicked
	$('#start-button').click(function() {
		// load the image and the content
		$(".right-images").attr("src",'./images/0.jpg');
		$('.sidebar-content').html(content[0]);
		$('.sidebar-title').html(head[0]);
		// hide the div with start page content
		$('#intro-slide').toggle();
		// transition animations
		$('#rpl').fadeOut();
		$('.sidebar').fadeIn('slow');
		$('.pictures').fadeIn('slow');
		$('.buttons').fadeIn('slow');
		$('.buttons1').fadeTo('fast', 0.7);
   	}); 

	// on restart button click, the intro view is loaded again
	$('#restart-button').click(function() {
		$('.pictures').toggle();
		$('.sidebar').toggle();
		$('.buttons').toggle();
		$('#intro-slide').fadeIn();
		$('#rpl').fadeIn();
		n = 0;
	});
	
	
	$('#next-button').click(function() {
		n = n+1;
		if (n < 25) {
			var con = content[n];
			var hea = head[n];
			var img = './images/'+n+'.jpg';
			$(".right-images").attr("src", img);
			$('.sidebar-title').html(hea);
			$('.sidebar-content').html(con);
			return false;
		} else {
			n = 24;
		}
	});
	
	$('#back-button').click(function() {
		n = n-1;
		if (n >= 0){		
			var con = content[n];
			var hea = head[n];
			var img = './images/'+n+'.jpg';
			$(".right-images").attr("src",img);
			$('.sidebar-title').html(hea);
			$('.sidebar-content').html(con);
			return false;
		} else {
			n = 0;
		}
	});
	
});