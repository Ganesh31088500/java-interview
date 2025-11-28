import React, { useState } from 'react';
import './JavaInterviewApp.css';

const JavaInterviewApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());

  const questions = [
    {
      id: 1,
      category: 'Basics',
      question: 'What is Java and what are its main features?',
      answer: 'Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). Main features include: Platform Independence (Write Once, Run Anywhere), Object-Oriented Programming, Automatic Memory Management (Garbage Collection), Multithreading support, Security features, Rich API and Standard Library, and Strong Community Support.'
    },
    {
      id: 2,
      category: 'Basics',
      question: 'What is the difference between JDK, JRE, and JVM?',
      answer: 'JVM (Java Virtual Machine): Executes Java bytecode and provides runtime environment. JRE (Java Runtime Environment): Contains JVM plus libraries needed to run Java applications. JDK (Java Development Kit): Contains JRE plus development tools like compiler (javac), debugger, and other utilities needed to develop Java applications.'
    },
    {
      id: 3,
      category: 'OOP',
      question: 'Explain the four pillars of Object-Oriented Programming.',
      answer: '1. Encapsulation: Bundling data and methods that operate on that data within a single unit (class) and hiding internal details. 2. Inheritance: Mechanism where one class acquires properties and behaviors of another class. 3. Polymorphism: Ability of objects to take multiple forms (method overloading and overriding). 4. Abstraction: Hiding complex implementation details and showing only essential features.'
    },
    {
      id: 4,
      category: 'OOP',
      question: 'What is the difference between abstract class and interface?',
      answer: 'Abstract Class: Can have both abstract and concrete methods, can have constructors, can have instance variables, supports single inheritance. Interface: All methods are abstract by default (before Java 8), cannot have constructors, can only have constants (public static final), supports multiple inheritance. From Java 8 onwards, interfaces can have default and static methods.'
    },
    {
      id: 5,
      category: 'Collections',
      question: 'What is the difference between ArrayList and LinkedList?',
      answer: 'ArrayList: Uses dynamic array, better for random access (get operations), slower for insertions/deletions in middle, implements RandomAccess interface. LinkedList: Uses doubly-linked list, better for insertions/deletions, slower for random access, implements Queue and Deque interfaces. Use ArrayList for frequent access and LinkedList for frequent modifications.'
    },
    {
      id: 6,
      category: 'Collections',
      question: 'What is HashMap and how does it work internally?',
      answer: 'HashMap is a key-value pair data structure that uses hashing. Internally, it uses an array of buckets. When putting a key-value pair: 1) Hash code of key is calculated, 2) Index is determined using hash code, 3) Value is stored at that index. For collisions, it uses linked lists (or trees in Java 8+). Default initial capacity is 16, and load factor is 0.75.'
    },
    {
      id: 7,
      category: 'Multithreading',
      question: 'What is the difference between Thread and Runnable?',
      answer: 'Thread is a class, while Runnable is an interface. Extending Thread class means you cannot extend any other class (single inheritance limitation). Implementing Runnable allows the class to extend another class and provides better object-oriented design. Runnable is preferred for creating threads as it separates task logic from thread mechanism.'
    },
    {
      id: 8,
      category: 'Multithreading',
      question: 'Explain synchronized keyword and its usage.',
      answer: 'Synchronized keyword is used to control access to a critical section of code by multiple threads. It ensures that only one thread can execute the synchronized block/method at a time. Can be applied to methods (instance or static) or blocks. Helps prevent thread interference and memory consistency errors. Uses intrinsic locks (monitor locks) for synchronization.'
    },
    {
      id: 9,
      category: 'Exception Handling',
      question: 'What is the difference between checked and unchecked exceptions?',
      answer: 'Checked Exceptions: Must be caught or declared in method signature, checked at compile-time, extend Exception class (e.g., IOException, SQLException). Unchecked Exceptions: Not required to be caught or declared, checked at runtime, extend RuntimeException class (e.g., NullPointerException, ArrayIndexOutOfBoundsException). Errors are also unchecked.'
    },
    {
      id: 10,
      category: 'Exception Handling',
      question: 'What is try-with-resources statement?',
      answer: 'Try-with-resources (introduced in Java 7) automatically closes resources that implement AutoCloseable interface. Syntax: try (Resource r = new Resource()) { }. Resources are closed automatically in reverse order of creation, even if exceptions occur. Eliminates need for explicit finally blocks for resource cleanup and prevents resource leaks.'
    },
    {
      id: 11,
      category: 'Java 8',
      question: 'What are Lambda expressions and their benefits?',
      answer: 'Lambda expressions provide a clear and concise way to implement functional interfaces (single abstract method). Syntax: (parameters) -> expression or (parameters) -> { statements }. Benefits include: Reduced code verbosity, enables functional programming, better readable code for collections operations, facilitates parallel processing, and works seamlessly with Stream API.'
    },
    {
      id: 12,
      category: 'Java 8',
      question: 'What is Stream API and its advantages?',
      answer: 'Stream API is used to process collections of objects in a functional style. Supports operations like filter, map, reduce, collect, etc. Advantages: Declarative approach, supports lazy evaluation, can leverage parallel processing, improves code readability, enables pipeline operations, and supports functional programming paradigms. Streams do not modify the original data source.'
    },
    {
      id: 13,
      category: 'Memory Management',
      question: 'Explain Java Memory Model and Garbage Collection.',
      answer: 'Java Memory is divided into: Heap (object storage), Stack (method calls and local variables), Method Area (class structures), and PC Registers. Garbage Collection automatically reclaims memory by removing objects no longer referenced. Types include: Serial GC, Parallel GC, CMS GC, G1 GC. GC runs in background and uses algorithms like Mark and Sweep, preventing memory leaks.'
    },
    {
      id: 14,
      category: 'String',
      question: 'Why is String immutable in Java?',
      answer: 'Strings are immutable for several reasons: 1) Security - String is used in class loading, prevents malicious code. 2) Thread Safety - Can be shared between threads without synchronization. 3) String Pool - Enables string interning to save memory. 4) Hashcode Caching - Immutability allows caching of hashcode. 5) Performance - String literals can be reused.'
    },
    {
      id: 15,
      category: 'String',
      question: 'What is the difference between String, StringBuilder, and StringBuffer?',
      answer: 'String: Immutable, thread-safe by nature, stored in String pool. StringBuilder: Mutable, not thread-safe, faster performance, introduced in Java 5. StringBuffer: Mutable, thread-safe (synchronized methods), slower than StringBuilder. Use String for constant values, StringBuilder for single-threaded string manipulation, and StringBuffer for multi-threaded scenarios.'
    },
{
    id: 16,
    category: 'Basics',
    question:'What are the main features of Java?',
    answer:'Platform independent,Object-oriented, Simple,Secure,Robust,Multithreaded,High performance (via JIT compiler)'
},{
    id:17,
    category:'Basics',
    question:'What is the difference between Heap and Stack memory?',
    answer:'Stack memory is used for storing method calls, local variables, and references, and it operates in a fast, Last-In-First-Out (LIFO) manner. In contrast, heap memory is used to store objects and is managed by the garbage collector. Stack memory is generally faster but limited in size, while heap memory is larger but slightly slower due to its dynamic nature and garbage collection.'
},{
    id:18,
    category:'OOP',
    question:'What is OOP?',
    answer: 'Object-Oriented Programming (OOP) is a programming paradigm that organizes software into objects, each containing data and methods. The four core principles of OOP are encapsulation, inheritance, polymorphism, and abstraction. These principles help make code more modular, reusable, secure, and easier to maintain.'
},{
    id:19,
    category: 'OOP',
    question:'What is Encapsulation?',
    answer:'Encapsulation is the practice of combining data (variables) and code (methods) inside a single unit, typically a class, and restricting direct access to some components. It is achieved by declaring variables as private and providing public getter and setter methods. Encapsulation enhances data protection and makes the code more flexible and easier to manage.'

},{
    id:20,
    category:'OOP',
    question: 'What is Polymorphism?',
    answer: 'Polymorphism refers to the ability of a single function, method, or operator to behave differently based on the context. In Java, it is achieved in two ways: compile-time polymorphism through method overloading and runtime polymorphism through method overriding. Polymorphism increases flexibility in code and allows objects to take many forms.'
},{
    id:21,
    category:'OOP',
    question: 'What is Inheritance?',
    answer:'Inheritance is an OOP concept where one class (the child or subclass) acquires properties and behaviors of another class (the parent or superclass). It promotes code reusability and makes it easier to manage and extend existing code. By deriving one class from another, developers can create more specialized classes without rewriting common functionality.'

},{
    id:22,
    category:'OOP',
    question:'What is Abstraction?',
    answer: 'Abstraction is the concept of hiding complex implementation details and showing only essential functionality to the user. It helps reduce programming complexity and improves code clarity. In Java, abstraction can be achieved through abstract classes and interfaces, which allow developers to define common methods without specifying how they work.'

},{
    id:23,
    category: 'OOP',
    question: 'What is a Constructor?',
    answer:'A constructor is a special type of method used to initialize objects when they are created. It has the same name as the class and does not have a return type. Constructors are called automatically during object creation and are used to set initial values for object attributes or perform setup operations.'
},
{
    id:24,
    category: 'OOP',
    question:'What is Method Overloading?',
    answer: 'Method overloading occurs when multiple methods in the same class share the same name but differ in the number or type of parameters. It allows a class to perform similar actions in different ways. Overloading enhances code readability and flexibility because a single method name can represent multiple behaviors.'
},{
    id:25,
    category:'OOP',
    question:'What is Method Overriding?',
    answer: 'Method overriding happens when a subclass provides its own implementation of a method that is already defined in the parent class. The method signature must remain the same. Overriding supports runtime polymorphism and enables dynamic method dispatch, allowing Java to determine which implementation to call based on the object type.'
},{
    id:26,
    category:'OOP',
    question:'What is the ‘this’ keyword?',
    answer:'The this keyword refers to the current object of a class. It is used to differentiate between instance variables and local variables with the same name and to call other methods or constructors within the same class. It helps in improving code clarity and avoiding naming conflicts.'
},{
    id:27,
    category:'OOP',
    question:'What is the ‘super’ keyword?',
    answer:'The super keyword is used to refer to the parent class. It can be used to access parent class methods, variables, or constructors. This is especially useful when a subclass overrides a method but still needs to call the parent class version or when initializing parent class attributes.'

},{
    id:28,
    category:'OOP',
    question:'What is the difference between == and equals()?',
    answer:'The == operator compares reference values, meaning it checks whether two references point to the same memory location. The equals() method, on the other hand, is used to compare the actual content or value of objects. For example, when comparing strings, equals() checks the characters, while == checks if both refer to the same String object.'
},{
    id:29,
    category:'OOP',
    question:'What is a Package in Java?',
    answer:'A package is a group of related classes and interfaces organized together to provide modularity and better code management. Java offers built-in packages such as java.util and java.io, while developers can also create user-defined packages. Packages help prevent naming conflicts and improve project organization.'

},{
    id:30,
    category:'OOP',
    question:'What are Access Modifiers in Java?',
    answer:'Java provides four access modifiers to control visibility: public, private, protected, and default (no modifier). Public members are accessible everywhere, private members only within the class, protected members within the same package and subclasses, and default members only within the same package. These modifiers help enforce encapsulation and secure code.'
},
  {
    "id": 31,
    "category": "Collections",
    "question": "What is the Java Collections Framework?",
    "answer": "The Java Collections Framework is a unified architecture that provides interfaces, classes, and algorithms to store, retrieve, and manipulate data in the form of objects. It includes data structures like List, Set, Queue, and Map, along with utility classes such as Collections and Arrays. The framework improves code reusability, performance, and reduces the effort needed to work with data."
  },
  {
    "id": 32,
    "category": "Collections",
    "question": "What is the difference between List and Set?",
    "answer": "A List is an ordered collection that allows duplicate elements and provides positional access to elements. A Set, on the other hand, does not allow duplicate values and does not guarantee any ordering unless using implementations like LinkedHashSet or TreeSet. Lists are ideal for indexed access, while Sets are useful when uniqueness matters."
  },
  {
    "id": 33,
    "category": "Collections",
    "question": "What is the difference between HashSet and TreeSet?",
    "answer": "HashSet stores elements in a hash table and does not maintain any order, offering constant-time performance for basic operations. TreeSet stores elements in a self-balancing binary search tree and maintains elements in sorted (ascending) order, providing logarithmic time performance. TreeSet is useful when sorted data is needed, while HashSet is faster for general use."
  },
  {
    "id": 34,
    "category": "Collections",
    "question": "What is the difference between ArrayList and LinkedList?",
    "answer": "ArrayList uses a dynamic array to store elements, providing fast random access but slower insertions and deletions in the middle. LinkedList uses a doubly linked list, offering faster insertions and deletions but slower random access. ArrayList is preferred for read-heavy tasks, while LinkedList is suitable for frequent insert and delete operations."
  },
  {
    "id": 35,
    "category": "Collections",
    "question": "What is a Map in Java?",
    "answer": "A Map is an object that stores key-value pairs, where each key is unique and maps to exactly one value. It does not extend the Collection interface but is part of the Collections Framework. Common implementations include HashMap, TreeMap, and LinkedHashMap, each with different behaviors related to ordering and performance."
  },
  {
    "id": 36,
    "category": "Collections",
    "question": "What is the difference between HashMap and TreeMap?",
    "answer": "HashMap stores key-value pairs using a hash table and does not maintain order, offering constant-time performance for most operations. TreeMap stores entries in a Red-Black tree and maintains keys in sorted order, providing logarithmic time performance. HashMap is faster, while TreeMap is preferred when sorted ordering is required."
  },
  {
    "id": 37,
    "category": "Collections",
    "question": "What is the difference between HashMap and Hashtable?",
    "answer": "HashMap is non-synchronized, allows one null key and multiple null values, and is faster in most cases. Hashtable is synchronized, does not allow null keys or values, and is considered legacy. HashMap is generally preferred for modern applications due to better performance and flexibility."
  },
  {
    "id": 38,
    "category": "Collections",
    "question": "What is Iterator in Java?",
    "answer": "Iterator is an interface that provides a way to traverse elements of a collection one by one. It supports element removal during iteration and works with all collections. Iterator ensures safe traversal by throwing ConcurrentModificationException if the collection is modified unexpectedly during iteration."
  },
  {
    "id": 39,
    "category": "Collections",
    "question": "What is the difference between Iterator and ListIterator?",
    "answer": "Iterator can traverse a collection in one direction (forward) and works with all collection types. ListIterator works only with List implementations and allows bidirectional traversal (forward and backward), as well as element addition, replacement, and index access. ListIterator is more powerful but more specialized."
  },
  {
    "id": 40,
    "category": "Collections",
    "question": "What is the Collections class?",
    "answer": "The Collections class is a utility class that provides static methods for common operations such as sorting, searching, reversing, shuffling, and synchronization of collections. It does not store elements but offers algorithms that operate on lists, sets, and maps to simplify data manipulation."
  },
  {
    "id": 41,
    "category": "Collections",
    "question": "What is the difference between Comparable and Comparator?",
    "answer": "Comparable is an interface used to define the natural ordering of objects within a class by implementing the compareTo method. Comparator is a separate interface used to define custom sorting logic outside the class using the compare method. Comparable modifies the class itself, while Comparator allows multiple sorting strategies without altering the original class."
  },
  {
    "id": 42,
    "category": "Collections",
    "question": "What is a fail-fast iterator?",
    "answer": "A fail-fast iterator immediately throws ConcurrentModificationException if a collection is modified structurally while iterating, except through the iterator's own remove method. This behavior prevents unpredictable results and helps detect concurrent modifications early during development."
  },
  {
    "id": 43,
    "category": "Collections",
    "question": "What is a fail-safe iterator?",
    "answer": "A fail-safe iterator works on a copy of the collection, meaning changes made to the original collection during iteration do not affect the iteration. Such iterators do not throw ConcurrentModificationException. They are typically used in concurrent collections like CopyOnWriteArrayList and ConcurrentHashMap."
  },
  {
    "id": 44,
    "category": "Collections",
    "question": "What is ConcurrentHashMap?",
    "answer": "ConcurrentHashMap is a thread-safe implementation of Map that allows concurrent read operations and controlled write operations without blocking the entire map. It divides the map into segments, enabling better performance in multi-threaded environments compared to Hashtable or synchronized maps."
  },
  {
    "id": 45,
    "category": "Collections",
    "question": "What is the difference between ArrayDeque and LinkedList as a Queue?",
    "answer": "ArrayDeque offers faster performance for queue operations because it uses a resizable array and avoids the overhead of node allocation. LinkedList, while flexible, is slower due to extra memory usage for links. ArrayDeque is generally preferred for stack and queue implementations unless specific LinkedList features are required."
  },{
  "id": 46,
  "category": "Collections",
  "question": "What is the working of HashMap?",
  "answer": "A HashMap works by storing key-value pairs in an array of buckets, where each bucket is identified by a hash value derived from the key's hashCode() method. When a key-value pair is inserted, the key's hashCode is calculated and then converted to an index using hashing. If the bucket at that index is empty, the pair is stored directly; if not, it uses chaining (a linked list or balanced tree after Java 8) to store multiple entries with the same index. When retrieving a value, HashMap hashes the key again, goes to the corresponding bucket, and then compares keys using equals() to find the exact match. This design gives HashMap average constant-time performance for put() and get() operations."
},
  {
    "id": 47,
    "category": "Collections",
    "question": "What happens internally when two keys in a HashMap have the same hash value?",
    "answer": "When two keys produce the same hash value, they are placed in the same bucket in the HashMap. This is known as a collision. HashMap handles collisions by using a linked list or a balanced Red-Black tree (after Java 8) inside the bucket. When a new entry arrives, the map compares the keys using equals() to determine if it is an update or a new entry. If it's new, it is added to the chain or tree."
  },
  {
    "id": 48,
    "category": "Collections",
    "question": "What is load factor in HashMap?",
    "answer": "The load factor in a HashMap determines when the internal array should be resized. It is the measure of how full the HashMap can get before it grows. The default load factor is 0.75, meaning that when the map is 75% full, it will resize its capacity to approximately double. This helps maintain efficient time complexity for insertion and retrieval operations."
  },
  {
    "id": 49,
    "category": "Collections",
    "question": "What is rehashing in HashMap?",
    "answer": "Rehashing occurs when the HashMap resizes itself after crossing its load factor threshold. During rehashing, a new array with larger capacity is created, and all existing key-value pairs are recalculated for their hash index and placed into the new array. This process ensures that the HashMap maintains efficiency but can be computationally expensive."
  },
  {
    "id": 50,
    "category": "Collections",
    "question": "What is LinkedHashMap and how does it work?",
    "answer": "LinkedHashMap is a HashMap implementation that maintains insertion order or access order using a doubly linked list inside each entry. It stores key-value pairs like HashMap but also links entries in the order they were inserted. This makes iteration predictable while still offering average constant-time operations. It is useful when order-sensitive operations are required."
  },
  {
    "id": 51,
    "category": "Collections",
    "question": "What is TreeMap and how does it work?",
    "answer": "TreeMap is a Red-Black tree-based implementation of the Map interface that stores its keys in sorted order. Every time an entry is added, the TreeMap places it in a position that maintains the balanced tree structure. This gives TreeMap logarithmic time complexity for put(), get(), and remove() operations. It is ideal when sorted or navigable maps are needed."
  },
  {
    "id": 52,
    "category": "Collections",
    "question": "What is the difference between HashMap and LinkedHashMap?",
    "answer": "HashMap does not guarantee any ordering of keys or values, while LinkedHashMap maintains a predictable iteration order based on insertion or access order. HashMap is slightly faster because it does not maintain a linked list, whereas LinkedHashMap provides ordering at the cost of slight overhead. Both allow one null key and multiple null values."
  },
  {
    "id": 53,
    "category": "Collections",
    "question": "What is WeakHashMap?",
    "answer": "WeakHashMap is a HashMap-like collection where the keys are stored as weak references. If a key is no longer referenced elsewhere in the application, it can be garbage collected even if it exists in the map. This makes WeakHashMap useful for caching, as entries automatically disappear when memory is needed."
  },
  {
    "id": 54,
    "category": "Collections",
    "question": "What is IdentityHashMap?",
    "answer": "IdentityHashMap is a Map implementation that compares keys using reference equality (==) instead of logical equality (equals()). It means that two keys are considered equal only if they refer to the exact same object. This map is used in specific cases like object graph traversal or serialization where object identity is crucial."
  },
  {
    "id": 55,
    "category": "Collections",
    "question": "What is PriorityQueue and how does it work?",
    "answer": "PriorityQueue is a queue implementation based on a binary heap that orders its elements according to natural ordering or a custom comparator. The head of the queue always contains the smallest (or highest priority) element. Insertions and removals have logarithmic time complexity, making it ideal for scheduling and priority-based tasks."
  },
  {
    "id": 56,
    "category": "Collections",
    "question": "What is the difference between Queue and Deque?",
    "answer": "A Queue follows FIFO (First-In-First-Out) ordering and allows insertion at the rear and removal from the front. A Deque (Double-Ended Queue) allows insertion and removal from both ends, making it suitable for implementing stacks and queues. Deque is more flexible, while Queue is more specialized."
  },
  {
    "id": 57,
    "category": "Collections",
    "question": "What is CopyOnWriteArrayList?",
    "answer": "CopyOnWriteArrayList is a thread-safe variant of ArrayList where modifications like add or remove create a new copy of the underlying array. This prevents ConcurrentModificationException and provides safe iteration without synchronization. It is ideal for use cases with frequent reads and infrequent writes."
  },
  {
    "id": 58,
    "category": "Collections",
    "question": "What is ConcurrentModificationException?",
    "answer": "ConcurrentModificationException occurs when a collection is structurally modified while iterating using fail-fast iterators. It is thrown to prevent unpredictable behavior during concurrent access. To avoid it, one should use fail-safe iterators or concurrent collections like CopyOnWriteArrayList or ConcurrentHashMap."
  },
  {
    "id": 59,
    "category": "Collections",
    "question": "What is EnumSet?",
    "answer": "EnumSet is a high-performance Set implementation specifically for use with enum types. It stores elements using bit vectors, making it extremely efficient in terms of memory and performance. EnumSet allows only enum values and does not accept null values. It is faster than HashSet when dealing with enums."
  },
  {
    "id": 60,
    "category": "Collections",
    "question": "What is the difference between ArrayList and Vector?",
    "answer": "ArrayList is non-synchronized and therefore faster, while Vector is synchronized and thread-safe but slower. Both grow dynamically, but Vector grows by doubling its size, whereas ArrayList grows by 50%. Vector is considered a legacy class, and ArrayList is preferred in modern applications."
  }
,
  {
    "id": 61,
    "category": "Multithreading",
    "question": "What is a thread in Java?",
    "answer": "A thread in Java is a lightweight unit of execution that runs independently within a program. It enables multitasking by allowing multiple operations to execute concurrently. Each thread has its own stack and lifecycle, and Java provides rich support for creating, managing, and synchronizing threads through the Thread class and Runnable interface."
  },
  {
    "id": 62,
    "category": "Multithreading",
    "question": "What is multithreading in Java?",
    "answer": "Multithreading in Java is the ability to run multiple threads simultaneously to improve performance and responsiveness. It allows tasks to be executed concurrently, making efficient use of CPU resources. Java provides built-in support for multithreading with the Thread class, Runnable interface, Executors framework, and synchronization mechanisms."
  },
  {
    "id": 63,
    "category": "Multithreading",
    "question": "What is the difference between a process and a thread?",
    "answer": "A process is an independent program with its own memory space, while a thread is a smaller unit of execution within a process that shares memory with other threads of the same process. Processes are heavyweight, require more resources, and have isolated memory, whereas threads are lightweight and communicate more efficiently because they share data."
  },
  {
    "id": 64,
    "category": "Multithreading",
    "question": "How do you create a thread in Java?",
    "answer": "A thread can be created in two main ways: by extending the Thread class and overriding the run() method, or by implementing the Runnable interface and passing an instance to a Thread object. Implementing Runnable is preferred because it allows the class to extend another parent class and promotes better separation of concerns."
  },
  {
    "id": 65,
    "category": "Multithreading",
    "question": "What is the lifecycle of a thread in Java?",
    "answer": "A Java thread goes through several states: New, Runnable, Running, Blocked/Waiting, and Terminated. A thread starts in the New state, becomes Runnable when start() is called, runs when the scheduler picks it, moves to Blocked or Waiting when waiting for resources or conditions, and ends in Terminated when run() completes."
  },
  {
    "id": 66,
    "category": "Multithreading",
    "question": "What is the difference between start() and run()?",
    "answer": "Calling start() creates a new thread and executes the run() method in that separate thread. Calling run() directly does not create a new thread; it simply executes the code within the current thread like a normal method call. Therefore, start() enables true multithreading, while run() does not."
  },
  {
    "id": 67,
    "category": "Multithreading",
    "question": "What is synchronization in Java?",
    "answer": "Synchronization in Java ensures that only one thread can access a shared resource at a time, preventing race conditions and data inconsistency. It is achieved using the synchronized keyword, which locks the object or method, ensuring thread safety in concurrent environments."
  },
  {
    "id": 68,
    "category": "Multithreading",
    "question": "What is a race condition?",
    "answer": "A race condition occurs when two or more threads access shared data simultaneously and the final outcome depends on the timing of thread execution. This often leads to inconsistent or unpredictable behavior. Synchronization techniques are used to prevent race conditions."
  },
  {
    "id": 69,
    "category": "Multithreading",
    "question": "What is a deadlock in Java?",
    "answer": "A deadlock occurs when two or more threads are blocked forever, each waiting for the other to release a resource. This happens when threads acquire locks in an inconsistent order. Deadlocks can cause an application to freeze, and they must be prevented through careful design, such as avoiding nested locks."
  },
  {
    "id": 70,
    "category": "Multithreading",
    "question": "What is the difference between wait() and sleep()?",
    "answer": "The sleep() method pauses the thread for a specified duration without releasing any locks, while wait() releases the lock and causes the thread to wait until it is notified. wait() must be called inside a synchronized block, whereas sleep() can be called anywhere."
  },
  {
    "id": 71,
    "category": "Multithreading",
    "question": "What is the synchronized block in Java?",
    "answer": "A synchronized block is a method of achieving thread safety by locking a specific object rather than the entire method. It provides more granular control by synchronizing only a particular block of code, improving performance while still preventing concurrent access to shared resources."
  },
  {
    "id": 72,
    "category": "Multithreading",
    "question": "What is a daemon thread?",
    "answer": "A daemon thread is a low-priority background thread that performs support tasks such as garbage collection. It runs in the background and does not prevent the JVM from shutting down. When all user threads finish, the JVM terminates all remaining daemon threads automatically."
  },
  {
    "id": 73,
    "category": "Multithreading",
    "question": "What is the Executor framework?",
    "answer": "The Executor framework is a high-level API introduced in Java 5 that simplifies thread management. Instead of manually creating and managing threads, you submit tasks to an Executor, and it handles thread creation, scheduling, and execution. It improves scalability and simplifies multi-threaded programming."
  },
  {
    "id": 74,
    "category": "Multithreading",
    "question": "What is a Callable in Java?",
    "answer": "Callable is an interface similar to Runnable but can return a result and throw checked exceptions. It is used with ExecutorService to run tasks that produce results. The result is retrieved through a Future object, making Callable useful for concurrent computations."
  },
  {
    "id": 75,
    "category": "Multithreading",
    "question": "What is Future in Java?",
    "answer": "A Future represents the result of an asynchronous computation. It provides methods to check if the task is complete, wait for completion, or retrieve the result. It is commonly used with ExecutorService, where tasks submitted using Callable return Future objects."
  }
,
  {
    "id": 76,
    "category": "Multithreading",
    "question": "What is a thread pool in Java?",
    "answer": "A thread pool is a group of pre-created worker threads that execute tasks from a queue. Instead of creating a new thread for each task, tasks are submitted to the pool, which reuses existing threads. This improves performance and resource management, especially in high-load applications, and is implemented using the ExecutorService in Java."
  },
  {
    "id": 77,
    "category": "Multithreading",
    "question": "What is ReentrantLock in Java?",
    "answer": "ReentrantLock is a lock from the java.util.concurrent.locks package that provides more sophisticated thread synchronization compared to synchronized blocks. It supports features like fairness policies, interruptible lock waiting, and the ability for a thread to reacquire the same lock it already holds. It offers more control but must be manually unlocked."
  },
  {
    "id": 78,
    "category": "Multithreading",
    "question": "What is volatile keyword in Java?",
    "answer": "The volatile keyword ensures that a variable’s value is always read from main memory rather than from a CPU cache. It guarantees visibility of changes across threads but does not ensure atomicity. It is used when multiple threads read and write a shared variable without requiring complex synchronization."
  },
  {
    "id": 79,
    "category": "Multithreading",
    "question": "What is atomicity in multithreading?",
    "answer": "Atomicity means that an operation completes as a single, indivisible step, so no other thread can observe it in an intermediate state. Operations like reading or writing a variable are atomic for some primitive types, but compound actions like incrementing are not. Java provides atomic classes such as AtomicInteger to ensure atomic operations."
  },
  {
    "id": 80,
    "category": "Multithreading",
    "question": "What is ThreadLocal in Java?",
    "answer": "ThreadLocal provides thread-local variables, ensuring each thread gets its own independent copy of a variable. This avoids synchronization because no two threads share the same value. ThreadLocal is useful for storing per-thread data such as user sessions or database connections in multi-threaded applications."
  },
  {
    "id": 81,
    "category": "Multithreading",
    "question": "What is the purpose of the join() method?",
    "answer": "The join() method allows one thread to wait for the completion of another thread. For example, if thread A calls thread B's join(), thread A will pause until thread B finishes execution. This is used to control execution flow in multi-threaded programs."
  },
  {
    "id": 82,
    "category": "Multithreading",
    "question": "What is deadlock prevention?",
    "answer": "Deadlock prevention involves techniques to ensure that threads do not end up waiting for each other’s resources indefinitely. Common strategies include acquiring locks in a consistent order, using tryLock() with timeouts, and avoiding nested locking. These approaches reduce the likelihood of deadlocks in concurrent applications."
  },
  {
    "id": 83,
    "category": "Multithreading",
    "question": "What is a semaphore in Java?",
    "answer": "A semaphore is a synchronization tool that controls access to a shared resource using permits. Threads must acquire a permit before accessing the resource and release it afterward. Semaphores can be used to limit the number of concurrent threads, making them useful for resource management like database connection pools."
  },
  {
    "id": 84,
    "category": "Multithreading",
    "question": "What is the difference between synchronized and Lock interface?",
    "answer": "The synchronized keyword is simple to use and automatically releases the lock, but it lacks advanced features. The Lock interface provides more flexibility, such as interruptible waits, timed lock attempts, and fairness policies. However, locks must be manually released, which requires careful handling to avoid issues."
  },
  {
    "id": 85,
    "category": "Multithreading",
    "question": "What is a ReadWriteLock?",
    "answer": "A ReadWriteLock is a concurrency mechanism that allows multiple threads to read a shared resource simultaneously while restricting write operations to a single thread. This improves performance in read-heavy scenarios by allowing concurrent reads but ensuring exclusive access for writes."
  },
  {
    "id": 86,
    "category": "Multithreading",
    "question": "What is CyclicBarrier in Java?",
    "answer": "CyclicBarrier is a synchronization aid that allows a group of threads to wait for each other at a common barrier point. Once all threads reach the barrier, they proceed simultaneously. It is reusable (cyclic) and useful for tasks that require multi-phase processing."
  },
  {
    "id": 87,
    "category": "Multithreading",
    "question": "What is CountDownLatch?",
    "answer": "CountDownLatch is a concurrency construct that allows one or more threads to wait until a set of operations are completed by other threads. It works by counting down from a given number, and once it reaches zero, all waiting threads are released. It is useful for scenarios like waiting for services to start before proceeding."
  },
  {
    "id": 88,
    "category": "Multithreading",
    "question": "What is the difference between CyclicBarrier and CountDownLatch?",
    "answer": "CountDownLatch is a one-time use synchronization tool that allows threads to wait until the countdown reaches zero, whereas CyclicBarrier is reusable and allows multiple threads to wait for each other. CountDownLatch is often used for waiting for events, while CyclicBarrier is used for coordinating phases of computation."
  },
  {
    "id": 89,
    "category": "Multithreading",
    "question": "What is a blocked thread?",
    "answer": "A blocked thread is one that is prevented from executing because it is waiting to acquire a monitor lock held by another thread. It remains in the BLOCKED state until the lock becomes available. This typically occurs when using synchronized methods or blocks."
  },
  {
    "id": 90,
    "category": "Multithreading",
    "question": "What is thread starvation?",
    "answer": "Thread starvation occurs when a thread is unable to gain access to shared resources or CPU time because other higher-priority threads are continuously accessing them. It often results from unfair lock acquisition or poorly designed scheduling, leading the affected thread to make little or no progress."
  },{
    "id": 91,
    "category": "Exception Handling",
    "question": "What is an exception in Java?",
    "answer": "An exception in Java is an event that disrupts the normal flow of a program. Exceptions can occur due to errors such as invalid user input, arithmetic errors, file not found, or network issues. Java provides a robust exception-handling mechanism to catch and handle these events gracefully without terminating the program unexpectedly."
  },
  {
    "id": 92,
    "category": "Exception Handling",
    "question": "What is the difference between checked and unchecked exceptions?",
    "answer": "Checked exceptions are exceptions that are checked at compile-time, meaning the compiler requires them to be handled with try-catch blocks or declared using the throws keyword. Examples include IOException and SQLException. Unchecked exceptions are not checked at compile time and occur at runtime, typically due to programming errors, such as NullPointerException or ArrayIndexOutOfBoundsException."
  },
  {
    "id": 93,
    "category": "Exception Handling",
    "question": "What is the difference between Error and Exception?",
    "answer": "In Java, Error represents serious problems that a program should not try to handle, like OutOfMemoryError or StackOverflowError, usually caused by the JVM. Exception represents conditions that a program can handle, such as file I/O problems or invalid input. Exceptions can be caught and recovered from, whereas Errors are generally fatal."
  },
  {
    "id": 94,
    "category": "Exception Handling",
    "question": "What is try-catch-finally in Java?",
    "answer": "The try-catch-finally construct is used to handle exceptions. Code that may throw an exception is placed inside the try block. The catch block handles the exception if it occurs. The finally block contains code that will always execute, whether or not an exception occurs, making it ideal for resource cleanup like closing files or database connections."
  },
  {
    "id": 95,
    "category": "Exception Handling",
    "question": "What is the throws keyword?",
    "answer": "The throws keyword is used in a method declaration to indicate that the method may throw one or more exceptions. It allows the caller of the method to handle the exception instead of handling it within the method itself. For example, a method that reads a file may declare 'throws IOException'."
  },
  {
    "id": 96,
    "category": "Exception Handling",
    "question": "What is the difference between throw and throws?",
    "answer": "The 'throw' keyword is used inside a method to actually throw an exception instance. In contrast, 'throws' is used in a method signature to declare which exceptions a method might throw. 'throw' deals with execution, while 'throws' deals with declaration."
  },
  {
    "id": 97,
    "category": "Exception Handling",
    "question": "What is custom exception in Java?",
    "answer": "A custom exception is a user-defined exception created by extending the Exception or RuntimeException class. It allows developers to define meaningful exceptions specific to their application logic. Custom exceptions improve code readability and provide more precise error handling."
  },
  {
    "id": 98,
    "category": "Exception Handling",
    "question": "What is the difference between checked and unchecked custom exceptions?",
    "answer": "A checked custom exception extends the Exception class and must be declared or handled at compile-time. An unchecked custom exception extends RuntimeException and can be thrown without mandatory handling. The choice depends on whether the exception represents recoverable conditions or programming errors."
  },
  {
    "id": 99,
    "category": "Exception Handling",
    "question": "What is the difference between getMessage() and printStackTrace()?",
    "answer": "The getMessage() method of an exception returns a short description of the exception, typically provided during creation. The printStackTrace() method prints the full stack trace to standard error, showing the sequence of method calls that led to the exception, which is useful for debugging."
  },
  {
    "id": 100,
    "category": "Exception Handling",
    "question": "What is multiple catch block in Java?",
    "answer": "Java allows multiple catch blocks to handle different types of exceptions separately for a single try block. Each catch block specifies a particular exception type, and the JVM matches the thrown exception with the first compatible catch block. This enables more precise and organized exception handling."
  },
  {
    "id": 101,
    "category": "Exception Handling",
    "question": "What is try-with-resources in Java?",
    "answer": "The try-with-resources statement is a feature introduced in Java 7 that automatically closes resources like files, sockets, or database connections after use. Resources declared in the parentheses of the try statement must implement the AutoCloseable interface. This ensures proper resource management and reduces boilerplate code for closing resources."
  },
  {
    "id": 102,
    "category": "Exception Handling",
    "question": "What is the difference between Exception and RuntimeException?",
    "answer": "Exception is the superclass for all checked and unchecked exceptions in Java. RuntimeException is a subclass of Exception that represents unchecked exceptions occurring at runtime, typically due to programming errors such as null pointer access or array index issues. RuntimeExceptions do not need to be declared or caught explicitly."
  },
  {
    "id": 103,
    "category": "Exception Handling",
    "question": "What is suppressed exception in Java?",
    "answer": "Suppressed exceptions occur when an exception is thrown in a try-with-resources block but another exception is thrown while closing the resource. The second exception is suppressed and attached to the first exception using the addSuppressed() method. This ensures that the original exception is not lost while still reporting other errors."
  },
  {
    "id": 104,
    "category": "Exception Handling",
    "question": "What is the difference between finally block and finalize() method?",
    "answer": "The finally block is part of exception handling and executes after try-catch, whether or not an exception occurs. It is used for cleanup tasks like closing resources. The finalize() method is called by the garbage collector before an object is destroyed and is used to release system resources. Finally is executed deterministically, whereas finalize() is non-deterministic."
  },
  {
    "id": 105,
    "category": "Exception Handling",
    "question": "What is Chained Exception in Java?",
    "answer": "Chained exceptions allow one exception to wrap another exception, preserving the original cause. This is useful when rethrowing an exception or converting one exception type to another while retaining the underlying details. The getCause() method retrieves the original exception."
  },
  {
    "id": 106,
    "category": "Java 8",
    "question": "What are the main features introduced in Java 8?",
    "answer": "Java 8 introduced several major features, including Lambda expressions, which allow functional programming; the Stream API for processing collections in a functional style; the new Date and Time API (java.time); default and static methods in interfaces; Optional class to handle null values; and functional interfaces like Predicate, Function, and Supplier."
  },
  {
    "id": 107,
    "category": "Java 8",
    "question": "What is a lambda expression in Java 8?",
    "answer": "A lambda expression is a concise way to represent an anonymous function that can be passed around as an object. It allows behavior to be treated as a parameter, simplifying code especially in collections and functional interfaces. The syntax typically includes parameters, the arrow '->', and a body, e.g., (a, b) -> a + b."
  },
  {
    "id": 108,
    "category": "Java 8",
    "question": "What is a functional interface?",
    "answer": "A functional interface is an interface that contains exactly one abstract method, and can therefore be implemented using a lambda expression. Functional interfaces may have default and static methods. Examples include Runnable, Callable, Comparator, and custom interfaces annotated with @FunctionalInterface."
  },
  {
    "id": 109,
    "category": "Java 8",
    "question": "What is the Stream API in Java 8?",
    "answer": "The Stream API allows functional-style operations on collections of objects. Streams enable operations like filter, map, reduce, collect, and sorted without modifying the underlying data source. They support parallel execution, lazy evaluation, and make it easier to write concise and readable code for data processing."
  },
  {
    "id": 110,
    "category": "Java 8",
    "question": "What is the difference between Collection and Stream?",
    "answer": "A Collection stores data in memory, whereas a Stream is an abstraction for processing sequences of data. Streams do not store elements; they operate on data from a source, support functional-style operations, and can be either sequential or parallel. Collections are eager and mutable, while streams are lazy and generally immutable."
  },
  {
    "id": 111,
    "category": "Java 8",
    "question": "What are default and static methods in interfaces?",
    "answer": "Java 8 allows interfaces to have default and static methods. Default methods provide an implementation in the interface itself, enabling backward compatibility when adding new methods to existing interfaces. Static methods belong to the interface and can be called without an instance, often used as utility methods."
  },
  {
    "id": 112,
    "category": "Java 8",
    "question": "What is the Optional class in Java 8?",
    "answer": "Optional is a container object introduced in Java 8 to represent the presence or absence of a value, reducing the risk of NullPointerException. It provides methods like isPresent(), ifPresent(), orElse(), and map() to handle values safely and avoid null checks."
  },
  {
    "id": 113,
    "category": "Java 8",
    "question": "What are method references in Java 8?",
    "answer": "Method references are shorthand notations for lambda expressions that call a specific method. They make code more readable and concise. Syntax includes ClassName::staticMethod, instance::instanceMethod, or ClassName::new for constructor references."
  },
  {
    "id": 114,
    "category": "Java 8",
    "question": "What is the difference between map() and flatMap() in streams?",
    "answer": "The map() method transforms each element of a stream into another object, resulting in a one-to-one mapping. flatMap() is used when each element produces multiple elements (e.g., a list), and it flattens the resulting nested streams into a single stream. flatMap is useful for avoiding nested stream structures."
  },
  {
    "id": 115,
    "category": "Java 8",
    "question": "What are the differences between forEach() and map() in Java 8 streams?",
    "answer": "forEach() is a terminal operation used to iterate over elements and perform an action, returning void. map() is an intermediate operation that transforms each element into another object, producing a new stream. forEach() is for side effects, while map() is for functional transformation."
  },
  {
    "id": 116,
    "category": "Java 8",
    "question": "What is a Predicate in Java 8?",
    "answer": "Predicate is a functional interface in Java 8 that represents a boolean-valued function of one argument. It is often used for filtering and matching in streams. The interface provides default methods like and(), or(), and negate() for composing predicates."
  },
  {
    "id": 117,
    "category": "Java 8",
    "question": "What is a Supplier in Java 8?",
    "answer": "Supplier is a functional interface that represents a supplier of results. It has a single abstract method get() that returns a value and does not take any arguments. Supplier is often used for lazy evaluation or deferred execution."
  },
  {
    "id": 118,
    "category": "Java 8",
    "question": "What is a Consumer in Java 8?",
    "answer": "Consumer is a functional interface representing an operation that takes a single argument and returns no result. It is typically used in forEach() operations in streams and provides default methods like andThen() to chain Consumers."
  },
  {
    "id": 119,
    "category": "Java 8",
    "question": "What is a Stream pipeline in Java 8?",
    "answer": "A Stream pipeline is a sequence of stream operations consisting of a source, zero or more intermediate operations, and a terminal operation. Intermediate operations are lazy and transform the stream, while terminal operations trigger the execution and produce results or side effects."
  },
  {
    "id": 120,
    "category": "Java 8",
    "question": "What is parallel stream in Java 8?",
    "answer": "A parallel stream is a stream that divides its elements into multiple substreams, processing them in parallel using multiple threads. Parallel streams can improve performance for large datasets, but care must be taken with thread-safety and shared mutable data. They are created by calling parallelStream() or parallel() on a stream."
  }
,
  {
    "id": 121,
    "category": "Java 8",
    "question": "What are Collectors in Java 8?",
    "answer": "Collectors are utility classes in the java.util.stream package used to accumulate elements of a stream into a summary result, such as a List, Set, Map, or a single value. They are used with the collect() terminal operation and provide common implementations like toList(), toSet(), toMap(), joining(), groupingBy(), and partitioningBy()."
  },
  {
    "id": 122,
    "category": "Java 8",
    "question": "What is the difference between map() and collect() in streams?",
    "answer": "map() is an intermediate operation that transforms each element of a stream into another object, producing a new stream. collect() is a terminal operation that aggregates stream elements into a collection, map, or other summary result. map() is for transformation, while collect() is for accumulation."
  },
  {
    "id": 123,
    "category": "Java 8",
    "question": "What is Optional and how is it used?",
    "answer": "Optional is a container class that may or may not contain a non-null value. It is used to avoid NullPointerException and to represent optional data explicitly. Common methods include isPresent(), ifPresent(), orElse(), orElseGet(), and orElseThrow(). Optional encourages better handling of null values in a functional style."
  },
  {
    "id": 124,
    "category": "Java 8",
    "question": "What are the differences between Optional.of(), Optional.ofNullable(), and Optional.empty()?",
    "answer": "Optional.of() creates an Optional with a non-null value and throws NullPointerException if null is passed. Optional.ofNullable() creates an Optional that can contain a null value. Optional.empty() creates an Optional with no value. These methods help manage optional data safely."
  },
  {
    "id": 125,
    "category": "Java 8",
    "question": "What are default methods in interfaces?",
    "answer": "Default methods are methods in interfaces that have a default implementation. Introduced in Java 8, they allow interfaces to evolve without breaking existing implementations. Default methods are declared with the 'default' keyword and can be overridden by implementing classes."
  },
  {
    "id": 126,
    "category": "Java 8",
    "question": "What is a functional interface annotation?",
    "answer": "@FunctionalInterface is an annotation that indicates an interface is intended to be a functional interface. It contains exactly one abstract method. The annotation is optional but helps the compiler generate errors if the interface does not meet functional interface requirements."
  },
  {
    "id": 127,
    "category": "Java 8",
    "question": "What are the types of method references in Java 8?",
    "answer": "There are four types of method references: 1) Reference to a static method (ClassName::staticMethod), 2) Reference to an instance method of a particular object (instance::instanceMethod), 3) Reference to an instance method of an arbitrary object of a type (ClassName::instanceMethod), 4) Reference to a constructor (ClassName::new). Method references are shorthand for lambda expressions."
  },
  {
    "id": 128,
    "category": "Java 8",
    "question": "What is the difference between sequential and parallel streams?",
    "answer": "Sequential streams process elements one after another in a single thread. Parallel streams divide elements into multiple chunks and process them concurrently using multiple threads from the ForkJoinPool. Parallel streams can improve performance for large datasets but require careful handling of shared mutable state."
  },
  {
    "id": 129,
    "category": "Java 8",
    "question": "What is the difference between findFirst() and findAny()?",
    "answer": "findFirst() returns the first element of the stream and is deterministic, useful for ordered streams. findAny() returns any element from the stream, and in parallel streams, it can be more efficient because it allows non-deterministic selection. Both return Optional types."
  },
  {
    "id": 130,
    "category": "Java 8",
    "question": "What are the differences between filter(), map(), and flatMap()?",
    "answer": "filter() is used to select elements that match a condition and returns a stream of the same type. map() transforms each element into another object or type, producing a one-to-one mapping. flatMap() is used when each element produces multiple elements (nested streams), and it flattens them into a single stream. filter() is for selection, map() for transformation, flatMap() for flattening."
  },
  {
    "id": 131,
    "category": "Java 8",
    "question": "What is the reduce() method in streams?",
    "answer": "The reduce() method is a terminal operation that combines stream elements into a single value using an associative accumulation function, like sum, product, or concatenation. It can take an identity value and a BinaryOperator, and optionally a combiner for parallel streams. reduce() is useful for aggregation operations."
  },
  {
    "id": 132,
    "category": "Java 8",
    "question": "What are primitive streams in Java 8?",
    "answer": "Java 8 provides specialized streams for primitive types to avoid boxing overhead: IntStream, LongStream, and DoubleStream. They support all standard stream operations and provide additional methods like sum(), average(), min(), max(), and range(). Primitive streams improve performance for numerical data processing."
  },
  {
    "id": 133,
    "category": "Java 8",
    "question": "What is the difference between peek() and map() in streams?",
    "answer": "peek() is mainly used for debugging and performing a side effect on each element without modifying the stream. map() is used to transform each element into a new value. peek() should not be used for modifying elements; map() is intended for functional transformation."
  },
  {
    "id": 134,
    "category": "Java 8",
    "question": "What is the difference between anyMatch(), allMatch(), and noneMatch()?",
    "answer": "anyMatch() returns true if any element matches a given predicate. allMatch() returns true if all elements match the predicate. noneMatch() returns true if no elements match the predicate. These are short-circuiting terminal operations that stop evaluating as soon as the result is determined."
  },
  {
    "id": 135,
    "category": "Java 8",
    "question": "What is the difference between Iterable.forEach() and Stream.forEach()?",
    "answer": "Iterable.forEach() is a default method in the Iterable interface and iterates over a collection sequentially. Stream.forEach() is a terminal stream operation that can be used in sequential or parallel streams. Stream.forEachOrdered() preserves encounter order in parallel streams, while Iterable.forEach() always follows the collection’s order."
  },
  {
    "id": 136,
    "category": "Memory Management",
    "question": "What is memory management in Java?",
    "answer": "Memory management in Java refers to the process of allocating, using, and freeing memory in the Java Virtual Machine (JVM). It includes managing heap memory for objects, stack memory for method execution and local variables, and garbage collection to reclaim memory used by objects no longer referenced by the program."
  },
  {
    "id": 137,
    "category": "Memory Management",
    "question": "What is the difference between stack memory and heap memory?",
    "answer": "Stack memory is used for method execution, primitive variables, and references to objects. It is thread-specific and automatically managed when a method is invoked or returns. Heap memory stores Java objects and class instances, is shared among all threads, and is managed by the garbage collector."
  },
  {
    "id": 138,
    "category": "Memory Management",
    "question": "What is garbage collection in Java?",
    "answer": "Garbage collection is the process by which the JVM automatically identifies and removes objects that are no longer reachable from any live thread or reference. It helps prevent memory leaks and optimizes memory usage. Java provides several garbage collectors like Serial, Parallel, CMS, and G1."
  },
  {
    "id": 139,
    "category": "Memory Management",
    "question": "What are strong, weak, soft, and phantom references in Java?",
    "answer": "Strong references are normal references preventing an object from being garbage collected. Soft references are collected only when memory is low, suitable for caching. Weak references allow objects to be collected as soon as they are weakly reachable. Phantom references are used to perform actions after an object has been finalized but before memory is reclaimed."
  },
  {
    "id": 140,
    "category": "Memory Management",
    "question": "What is the difference between PermGen and Metaspace?",
    "answer": "PermGen (Permanent Generation) was used in earlier Java versions to store class metadata and interned strings, but it had fixed size and could cause OutOfMemoryError. In Java 8 and later, Metaspace replaces PermGen. Metaspace dynamically grows and stores class metadata outside the heap, reducing memory management issues."
  },
  {
    "id": 141,
    "category": "Memory Management",
    "question": "What is the finalize() method in Java?",
    "answer": "The finalize() method is called by the garbage collector before an object is removed from memory. It allows the object to release resources or perform cleanup tasks. However, it is non-deterministic and not guaranteed to execute promptly, so explicit resource management using try-with-resources is preferred."
  },
  {
    "id": 142,
    "category": "Memory Management",
    "question": "What is memory leak in Java?",
    "answer": "A memory leak occurs when objects that are no longer needed continue to be referenced, preventing garbage collection. This leads to increased memory usage and can eventually cause OutOfMemoryError. Common causes include static collections, long-lived caches, and unclosed resources."
  },
  {
    "id": 143,
    "category": "Memory Management",
    "question": "What are the different types of garbage collectors in Java?",
    "answer": "Java provides several garbage collectors: Serial GC for single-threaded applications, Parallel GC for throughput-focused multi-threaded apps, CMS (Concurrent Mark-Sweep) for low-latency applications, and G1 (Garbage First) GC for predictable pause times. Each has different trade-offs in terms of throughput, pause time, and memory footprint."
  },
  {
    "id": 144,
    "category": "Memory Management",
    "question": "What is the difference between minor GC and major GC?",
    "answer": "Minor GC occurs in the Young Generation to reclaim memory from short-lived objects. Major GC, also called Full GC, occurs in the Old Generation to clean up long-lived objects. Minor GC is usually fast and frequent, whereas major GC is slower and can cause noticeable application pauses."
  },
  {
    "id": 145,
    "category": "Memory Management",
    "question": "What is the Young Generation, Old Generation, and Eden space in JVM?",
    "answer": "The Young Generation is where new objects are allocated. It consists of Eden and Survivor spaces. Eden stores newly created objects, while Survivor spaces store objects that survived minor GCs. The Old Generation holds long-lived objects that have survived multiple minor GCs. This generational model optimizes garbage collection performance."
  },
  {
    "id": 146,
    "category": "Memory Management",
    "question": "What is the difference between stack overflow and heap overflow?",
    "answer": "A stack overflow occurs when too many method calls exhaust the stack memory, often due to infinite recursion. A heap overflow occurs when the JVM cannot allocate memory for new objects because heap space is full, often caused by memory leaks. Stack overflow affects the call stack; heap overflow affects object storage."
  },
  {
    "id": 147,
    "category": "Memory Management",
    "question": "What is reference counting in garbage collection?",
    "answer": "Reference counting is a garbage collection technique where each object keeps track of how many references point to it. When the reference count reaches zero, the object can be collected. However, it cannot detect cyclic references, which is why modern JVMs use tracing garbage collection algorithms instead."
  },
  {
    "id": 148,
    "category": "Memory Management",
    "question": "What is a memory profiler in Java?",
    "answer": "A memory profiler is a tool used to monitor and analyze memory usage in Java applications. It helps detect memory leaks, analyze object allocation, track heap usage, and identify performance bottlenecks. Popular Java memory profilers include VisualVM, YourKit, and JProfiler."
  },
  {
    "id": 149,
    "category": "Memory Management",
    "question": "What is OutOfMemoryError in Java?",
    "answer": "OutOfMemoryError occurs when the JVM cannot allocate memory for objects or data structures because the heap is full or there is insufficient native memory. It can result from memory leaks, large object creation, or insufficient JVM heap size configuration."
  },
  {
    "id": 150,
    "category": "Memory Management",
    "question": "How can memory management be optimized in Java?",
    "answer": "Memory management can be optimized by reducing object creation, reusing objects, closing resources promptly, using efficient data structures, and tuning JVM parameters. Profiling the application with memory analysis tools, using proper caching strategies, and selecting the right garbage collector can also improve performance."
  },
  {
    "id": 151,
    "category": "String",
    "question": "What is the difference between String, StringBuilder, and StringBuffer in Java?",
    "answer": "String is immutable, meaning once created, its value cannot be changed. StringBuilder and StringBuffer are mutable, allowing modification of their content without creating new objects. StringBuilder is not synchronized and is faster, while StringBuffer is synchronized and thread-safe."
  },
  {
    "id": 152,
    "category": "String",
    "question": "What is string pooling in Java?",
    "answer": "String pooling is a memory optimization technique where Java maintains a pool of String literals in the heap. When a new String literal is created, the JVM checks if it exists in the pool; if so, it reuses the reference instead of creating a new object. This reduces memory usage and improves performance."
  },
  {
    "id": 153,
    "category": "String",
    "question": "Why is String immutable in Java?",
    "answer": "Strings are immutable to improve security, performance, and thread safety. Immutability allows Strings to be safely shared between threads, used as keys in hash-based collections, and reduces the risk of accidental or malicious modification."
  },
  {
    "id": 154,
    "category": "String",
    "question": "What is the difference between equals() and == for Strings?",
    "answer": "The equals() method compares the content of two Strings, while '==' compares their references in memory. Two different String objects with the same content will return true for equals() but false for '==', unless they reference the same object in the string pool."
  },
  {
    "id": 155,
    "category": "String",
    "question": "What are the common methods of the String class?",
    "answer": "Common methods of the String class include length(), charAt(), substring(), concat(), contains(), equals(), equalsIgnoreCase(), indexOf(), lastIndexOf(), split(), trim(), toUpperCase(), toLowerCase(), and replace(). These methods provide operations for string manipulation and comparison."
  },
  {
    "id": 156,
    "category": "String",
    "question": "What is the difference between substring() and subSequence()?",
    "answer": "substring() returns a new String containing the specified range of characters from the original String. subSequence() returns a CharSequence, which is a more general interface implemented by String. In practice, substring() is commonly used for string manipulation, while subSequence() is used in generic contexts."
  },
  {
    "id": 157,
    "category": "String",
    "question": "What is the difference between StringBuilder and StringBuffer?",
    "answer": "StringBuilder is faster and non-synchronized, making it suitable for single-threaded operations. StringBuffer is synchronized and thread-safe, suitable for multi-threaded environments where multiple threads may modify the same object concurrently."
  },
  {
    "id": 158,
    "category": "String",
    "question": "How can you convert a String to a primitive type?",
    "answer": "You can convert a String to a primitive type using wrapper classes. For example, Integer.parseInt(\"123\") converts to int, Double.parseDouble(\"12.34\") converts to double, Boolean.parseBoolean(\"true\") converts to boolean, and so on."
  },
  {
    "id": 159,
    "category": "String",
    "question": "How can you convert a primitive type to a String?",
    "answer": "You can convert a primitive type to a String using String.valueOf() or by concatenation with an empty string. For example, String.valueOf(123) or 123 + \"\" converts an int to a String. This works for other primitive types as well."
  },
  {
    "id": 160,
    "category": "String",
    "question": "What is the difference between intern() and new String()?",
    "answer": "new String() creates a new String object in heap memory, even if the same content exists in the string pool. intern() returns a reference to the pooled string if it exists; otherwise, it adds the string to the pool and returns the reference. intern() helps reduce memory usage by reusing strings."
  },
  {
    "id": 161,
    "category": "String",
    "question": "How can you check if a String is empty or null?",
    "answer": "You can check if a String is null or empty using conditional statements: if(str == null || str.isEmpty()). Java 11 introduced isBlank(), which also checks for strings containing only whitespace."
  },
  {
    "id": 162,
    "category": "String",
    "question": "What is the difference between compareTo() and equals()?",
    "answer": "equals() checks if two strings have the same content and returns a boolean. compareTo() compares strings lexicographically and returns an integer: 0 if equal, a negative value if the calling string is smaller, and a positive value if it is larger. compareTo() is useful for sorting strings."
  },
  {
    "id": 163,
    "category": "String",
    "question": "What is the difference between String.split() and StringTokenizer?",
    "answer": "String.split() splits a string into an array of substrings using a regular expression and returns a String array. StringTokenizer is a legacy class that splits a string into tokens and allows iteration using hasMoreTokens() and nextToken(). split() is more flexible and preferred in modern Java."
  },
  {
    "id": 164,
    "category": "String",
    "question": "What is the difference between replace() and replaceAll()?",
    "answer": "replace() replaces all occurrences of a character or literal sequence with another literal sequence. replaceAll() replaces all occurrences that match a regular expression. replaceAll() provides more powerful pattern-based replacements than replace()."
  },
  {
    "id": 165,
    "category": "String",
    "question": "What is the difference between StringBuilder.append() and String.concat()?",
    "answer": "StringBuilder.append() modifies the existing StringBuilder object, whereas String.concat() returns a new String object because Strings are immutable. append() is more efficient when concatenating multiple strings in loops or repeatedly."
  },
  {
    "id": 166,
    "category": "String",
    "question": "Why are Strings immutable in Java and how does it benefit memory management?",
    "answer": "Strings are immutable to improve security, performance, and thread-safety. Immutability allows strings to be shared safely across threads, used as keys in hash-based collections without risk of modification, and reused from the string pool, reducing memory overhead."
  },
  {
    "id": 167,
    "category": "String",
    "question": "What happens in memory when you concatenate two Strings using + operator?",
    "answer": "When using the + operator with Strings, Java internally uses a StringBuilder to concatenate them. For example, str1 + str2 is compiled as new StringBuilder(str1).append(str2).toString(). This creates a new String object because Strings are immutable, leaving the original objects unchanged."
  },
  {
    "id": 168,
    "category": "String",
    "question": "What is the difference between String.equals() and String.equalsIgnoreCase()?",
    "answer": "equals() compares two strings considering case, so 'Java' and 'java' are different. equalsIgnoreCase() ignores case differences, so 'Java' and 'java' are considered equal. This is useful when case should not affect string comparison."
  },
  {
    "id": 169,
    "category": "String",
    "question": "What is the difference between String.startsWith() and String.endsWith()?",
    "answer": "startsWith() checks if the string begins with the specified prefix, while endsWith() checks if the string ends with the specified suffix. Both return boolean values and are commonly used for pattern matching and validation."
  },
  {
    "id": 170,
    "category": "String",
    "question": "How do you reverse a String in Java?",
    "answer": "You can reverse a string using StringBuilder or StringBuffer: new StringBuilder(str).reverse().toString(). Alternatively, you can reverse it manually using a loop or converting to a char array and swapping elements. Using StringBuilder is the most concise and efficient approach."
  },
  {
    "id": 171,
    "category": "String",
    "question": "How does the intern() method affect the string pool?",
    "answer": "The intern() method checks if a string with the same content exists in the string pool. If it exists, it returns the reference from the pool; otherwise, it adds the string to the pool and returns its reference. This helps save memory and allows reference equality comparisons using '=='."
  },
  {
    "id": 172,
    "category": "String",
    "question": "What is the difference between StringBuffer.reverse() and manual reversal?",
    "answer": "StringBuffer.reverse() provides a built-in, optimized method to reverse the content of a string buffer or builder. Manual reversal involves iterating over the string or char array and swapping characters. reverse() is simpler, less error-prone, and generally faster than manual reversal."
  },
  {
    "id": 173,
    "category": "String",
    "question": "What is the difference between String.matches() and Pattern/Matcher?",
    "answer": "String.matches() evaluates the entire string against a regular expression and returns a boolean. Pattern and Matcher classes provide more flexibility for regex, including partial matches, groups, and iterative searching, and are more efficient when applying the same regex multiple times."
  },
  {
    "id": 174,
    "category": "String",
    "question": "What is the difference between String.getBytes() and String.toCharArray()?",
    "answer": "getBytes() converts a string to a byte array using the platform’s default charset or a specified charset. toCharArray() converts the string to a character array representing each character as a char. getBytes() is useful for I/O or network operations, while toCharArray() is for character manipulation."
  },
  {
    "id": 175,
    "category": "String",
    "question": "How can you count occurrences of a character in a String?",
    "answer": "You can count occurrences using a loop, iterating over the string and incrementing a counter when a match is found. Alternatively, in Java 8, you can use streams: str.chars().filter(c -> c == 'a').count(). This returns the number of occurrences efficiently."
  },
  {
    "id": 176,
    "category": "String",
    "question": "How can you remove all whitespaces from a String?",
    "answer": "You can remove all whitespaces using replaceAll(): str.replaceAll(\"\\\\s\", \"\"). This removes spaces, tabs, and other whitespace characters. Alternatively, you can use streams or manual iteration, but replaceAll() is the most concise approach."
  },
  {
    "id": 177,
    "category": "String",
    "question": "What is the difference between String.replace() and String.replaceAll()?",
    "answer": "replace() replaces all occurrences of a literal character or substring, while replaceAll() replaces occurrences that match a regular expression. replaceAll() is more powerful and flexible because it supports pattern matching, whereas replace() is simpler and literal-based."
  },
  {
    "id": 178,
    "category": "String",
    "question": "How can you check if a String contains only digits?",
    "answer": "You can use a regular expression: str.matches(\"\\\\d+\") returns true if the string contains only digits. Alternatively, you can iterate through each character and use Character.isDigit() to verify that all characters are numeric."
  },
  {
    "id": 179,
    "category": "String",
    "question": "What is the difference between String.substring() and String.split()?",
    "answer": "substring() extracts a portion of the string based on index positions, returning a single string. split() divides the string into an array of substrings based on a delimiter or regex. substring() is for precise range extraction, while split() is for dividing strings into parts."
  },
  {
    "id": 180,
    "category": "String",
    "question": "How can you optimize memory usage with Strings in Java?",
    "answer": "You can optimize memory by reusing string literals from the string pool, using intern() for dynamically created strings, avoiding unnecessary concatenation in loops (prefer StringBuilder), and minimizing the creation of temporary strings. Proper string management reduces heap usage and improves performance."
  },
  {
    "id": 181,
    "category": "Spring",
    "question": "What is the Spring Framework?",
    "answer": "The Spring Framework is a lightweight, open-source Java framework that provides comprehensive infrastructure support for developing Java applications. It is widely used for building enterprise-level applications and offers features like Inversion of Control (IoC), Dependency Injection (DI), Aspect-Oriented Programming (AOP), and support for data access, transaction management, and MVC architecture."
  },
  {
    "id": 182,
    "category": "Spring",
    "question": "What is Inversion of Control (IoC) in Spring?",
    "answer": "Inversion of Control (IoC) is a design principle where the control of object creation and dependency management is transferred from the application code to the Spring container. Instead of the class creating its dependencies, the container injects required dependencies, promoting loose coupling and easier testing."
  },
  {
    "id": 183,
    "category": "Spring",
    "question": "What is Dependency Injection (DI) in Spring?",
    "answer": "Dependency Injection (DI) is a technique in which the Spring container provides the dependencies a class needs rather than the class creating them itself. DI can be achieved through constructor injection, setter injection, or field injection, allowing for more maintainable and testable code."
  },
  {
    "id": 184,
    "category": "Spring",
    "question": "What are the types of Spring containers?",
    "answer": "Spring provides several types of containers: 1) BeanFactory: the simplest container that provides basic DI support. 2) ApplicationContext: a more advanced container that provides additional features like internationalization, event propagation, and integration with Spring AOP. Common implementations include ClassPathXmlApplicationContext and AnnotationConfigApplicationContext."
  },
  {
    "id": 185,
    "category": "Spring",
    "question": "What is the difference between BeanFactory and ApplicationContext?",
    "answer": "BeanFactory is a basic container that lazily instantiates beans when requested, offering minimal functionality. ApplicationContext is a more feature-rich container that eagerly loads beans, supports internationalization, event handling, and integrates with Spring AOP. ApplicationContext is preferred for most enterprise applications."
  },
  {
    "id": 186,
    "category": "Spring",
    "question": "What is a Spring Bean?",
    "answer": "A Spring Bean is an object that is instantiated, managed, and configured by the Spring IoC container. Beans are defined in configuration files (XML) or via annotations (@Component, @Service, @Repository, @Controller) and can have their dependencies injected automatically by the container."
  },
  {
    "id": 187,
    "category": "Spring",
    "question": "What are the different scopes of Spring Beans?",
    "answer": "Spring supports several bean scopes: 1) singleton (one shared instance per Spring container), 2) prototype (new instance every time requested), 3) request (one per HTTP request, for web apps), 4) session (one per HTTP session), 5) application (one per ServletContext), and 6) websocket (one per WebSocket). Singleton is the default scope."
  },
  {
    "id": 188,
    "category": "Spring",
    "question": "What is the difference between @Component, @Service, @Repository, and @Controller?",
    "answer": "@Component is a generic stereotype for any Spring-managed component. @Service indicates a service layer component. @Repository indicates a persistence layer component and enables exception translation for database operations. @Controller indicates a web controller in the Spring MVC framework."
  },
  {
    "id": 189,
    "category": "Spring",
    "question": "What is Spring AOP (Aspect-Oriented Programming)?",
    "answer": "Spring AOP allows the separation of cross-cutting concerns (like logging, transaction management, or security) from business logic. It enables aspects, advice, pointcuts, and join points to modularize behavior that spans multiple objects, improving code maintainability and reducing duplication."
  },
  {
    "id": 190,
    "category": "Spring",
    "question": "What are the types of advice in Spring AOP?",
    "answer": "Spring AOP supports several types of advice: 1) Before: runs before the method execution, 2) After: runs after the method execution regardless of outcome, 3) AfterReturning: runs after a method returns successfully, 4) AfterThrowing: runs if the method throws an exception, 5) Around: runs before and after method execution and can control whether the method executes."
  },
  {
    "id": 191,
    "category": "Spring",
    "question": "What is the difference between Bean Post Processor and Bean Factory Post Processor?",
    "answer": "BeanFactoryPostProcessor allows modifying bean definitions before beans are instantiated, such as changing property values. BeanPostProcessor allows custom logic before and after the initialization of beans, such as performing additional setup or proxy wrapping of beans. BeanPostProcessor works on actual bean instances."
  },
  {
    "id": 192,
    "category": "Spring",
    "question": "What is Spring MVC?",
    "answer": "Spring MVC is a framework within the Spring ecosystem for building web applications using the Model-View-Controller pattern. It separates the application into the model (data), view (UI), and controller (request handling), promoting cleaner architecture and maintainable code."
  },
  {
    "id": 193,
    "category": "Spring",
    "question": "What is the difference between @Autowired and @Inject?",
    "answer": "@Autowired is a Spring-specific annotation used for automatic dependency injection. @Inject is part of the Java CDI (Contexts and Dependency Injection) standard. Both can be used for constructor, setter, or field injection, but @Autowired provides additional Spring-specific features like required=false and qualifier support."
  },
  {
    "id": 194,
    "category": "Spring",
    "question": "What is the difference between @Qualifier and @Primary?",
    "answer": "@Primary is used to mark a bean as the default when multiple beans of the same type exist. @Qualifier is used to specify which bean should be injected when multiple candidates exist. Together, they help resolve ambiguity in dependency injection."
  },
  {
    "id": 195,
    "category": "Spring",
    "question": "What is the difference between @Controller and @RestController?",
    "answer": "@Controller is used for Spring MVC controllers that return view names and rely on a view resolver. @RestController is a specialized version of @Controller that combines @Controller and @ResponseBody, returning data directly (like JSON or XML) instead of view names, suitable for REST APIs."
  },
  {
    "id": 196,
    "category": "Spring",
    "question": "What is Spring Boot?",
    "answer": "Spring Boot is an extension of the Spring Framework that simplifies the creation of stand-alone, production-ready Spring applications. It provides auto-configuration, embedded servers, and opinionated defaults to reduce boilerplate configuration and speed up development."
  },
  {
    "id": 197,
    "category": "Spring",
    "question": "What is the difference between Spring and Spring Boot?",
    "answer": "Spring is a comprehensive framework requiring manual configuration of components and infrastructure. Spring Boot builds on Spring and provides auto-configuration, embedded servers, and production-ready features, making it faster and easier to develop applications with minimal setup."
  },
  {
    "id": 198,
    "category": "Spring",
    "question": "What are the advantages of Spring Boot?",
    "answer": "Advantages include: rapid application development with minimal configuration, embedded servers (like Tomcat, Jetty), standalone deployment, opinionated defaults for easier setup, automatic dependency management, monitoring with Actuator, and seamless integration with Spring ecosystem modules like Spring Data, Spring Security, and Spring MVC."
  },
  {
    "id": 199,
    "category": "Spring",
    "question": "What is Spring Boot Starter?",
    "answer": "Spring Boot Starters are pre-defined dependency descriptors that simplify dependency management. For example, spring-boot-starter-web includes dependencies for Spring MVC, Tomcat, and Jackson for building web applications. Starters reduce the need to specify multiple individual dependencies manually."
  },
  {
    "id": 200,
    "category": "Spring",
    "question": "What is Spring Boot Actuator?",
    "answer": "Spring Boot Actuator provides production-ready features such as monitoring, metrics, health checks, and application info. It exposes endpoints like /actuator/health and /actuator/metrics, enabling developers and operations teams to monitor and manage Spring Boot applications effectively."
  },
  {
    "id": 201,
    "category": "Spring",
    "question": "What is Spring Boot Auto-Configuration?",
    "answer": "Auto-Configuration is a feature in Spring Boot that automatically configures beans based on the classpath, properties, and other environment settings. It reduces boilerplate configuration by guessing and configuring commonly used components, while still allowing developers to override defaults."
  },
  {
    "id": 202,
    "category": "Spring",
    "question": "What is Spring Data JPA?",
    "answer": "Spring Data JPA is a part of the Spring Data project that simplifies database access using JPA. It provides repository abstractions, eliminating boilerplate code for CRUD operations, and supports custom queries, pagination, and transaction management for relational databases."
  },
  {
    "id": 203,
    "category": "Spring",
    "question": "What are the differences between @Transactional and programmatic transaction management?",
    "answer": "@Transactional provides declarative transaction management using annotations and proxies, allowing transactions to be defined at class or method level. Programmatic transaction management uses TransactionTemplate or PlatformTransactionManager to explicitly control transaction boundaries in code. Declarative transactions are easier to manage and less error-prone."
  },
  {
    "id": 204,
    "category": "Spring",
    "question": "What is the difference between @Repository and @Transactional?",
    "answer": "@Repository is a stereotype annotation for persistence layer beans, and it also enables exception translation from JDBC exceptions to Spring DataAccessException. @Transactional manages transactional behavior, specifying commit and rollback rules for methods or classes. Both can be used together for data access services."
  },
  {
    "id": 205,
    "category": "Spring",
    "question": "What is Spring Security?",
    "answer": "Spring Security is a framework that provides authentication, authorization, and protection against common security vulnerabilities in Spring applications. It supports role-based access, method-level security, password encryption, OAuth2, JWT, CSRF protection, and integration with various authentication providers."
  },
  {
    "id": 206,
    "category": "Spring",
    "question": "What is the difference between authentication and authorization in Spring Security?",
    "answer": "Authentication verifies the identity of a user, confirming they are who they claim to be, typically using usernames and passwords. Authorization determines what resources or actions the authenticated user is allowed to access, often based on roles or permissions."
  },
  {
    "id": 207,
    "category": "Spring",
    "question": "What are the differences between @ComponentScan and @SpringBootApplication?",
    "answer": "@ComponentScan tells Spring which packages to scan for annotated components like @Service, @Repository, and @Controller. @SpringBootApplication is a meta-annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan, simplifying Spring Boot application setup."
  },
  {
    "id": 208,
    "category": "Spring",
    "question": "What is the difference between @EnableAutoConfiguration and @SpringBootApplication?",
    "answer": "@EnableAutoConfiguration enables Spring Boot’s auto-configuration mechanism, allowing Spring to configure beans based on classpath and properties. @SpringBootApplication is a composite annotation that includes @EnableAutoConfiguration, @Configuration, and @ComponentScan, serving as a convenient starting point for Spring Boot applications."
  },
  {
    "id": 209,
    "category": "Spring",
    "question": "What is Spring Boot DevTools?",
    "answer": "Spring Boot DevTools is a development tool that improves developer productivity by providing features like automatic application restart, live reload, property defaults for development, and debugging support. It is included as a dependency in development environments and excluded from production builds."
  },
  {
    "id": 210,
    "category": "Spring",
    "question": "How can you externalize configuration in Spring Boot?",
    "answer": "Spring Boot allows externalizing configuration using application.properties or application.yml files, environment variables, command-line arguments, and Spring Cloud Config. This enables different configurations for development, testing, and production without changing the code."
  },
  {
    "id": 211,
    "category": "Spring",
    "question": "What are Spring Profiles?",
    "answer": "Spring Profiles allow you to define different configurations for different environments, such as development, testing, and production. You can activate a profile using application properties, command-line arguments, or environment variables. Beans can be loaded conditionally based on the active profile using @Profile."
  },
  {
    "id": 212,
    "category": "Spring",
    "question": "How do you create a REST API in Spring Boot?",
    "answer": "A REST API in Spring Boot can be created using @RestController for the controller class, @RequestMapping or HTTP method annotations (@GetMapping, @PostMapping, etc.) for endpoint mapping, and @RequestBody and @PathVariable for handling request data. Spring Boot automatically converts Java objects to JSON using Jackson."
  },
  {
    "id": 213,
    "category": "Spring",
    "question": "How do you handle exceptions in Spring Boot REST APIs?",
    "answer": "Exceptions in Spring Boot REST APIs can be handled using @ExceptionHandler in controller classes, @ControllerAdvice for global exception handling, or ResponseEntityExceptionHandler for more control. This allows returning custom error messages and HTTP status codes to clients."
  },
  {
    "id": 214,
    "category": "Spring",
    "question": "What is the difference between @RequestParam and @PathVariable?",
    "answer": "@RequestParam extracts query parameters from the URL, e.g., /users?id=1, while @PathVariable extracts values from the URI path itself, e.g., /users/1. @RequestParam is optional by default, while @PathVariable is required unless specified otherwise."
  },
  {
    "id": 215,
    "category": "Spring",
    "question": "What is the difference between @RestController and @ControllerAdvice?",
    "answer": "@RestController is used to define REST endpoints returning JSON or XML, while @ControllerAdvice is used to define global exception handlers, model attributes, or binding configurations across multiple controllers. @ControllerAdvice complements REST controllers for cross-cutting concerns."
  },
  {
    "id": 216,
    "category": "Spring",
    "question": "What is Spring Boot Starter Test?",
    "answer": "Spring Boot Starter Test is a dependency that provides testing libraries and utilities, including JUnit, Mockito, AssertJ, Hamcrest, and Spring TestContext framework. It enables unit testing, integration testing, and mocking of Spring beans and web contexts for effective test coverage."
  },
  {
    "id": 217,
    "category": "Spring",
    "question": "What is the difference between @MockBean and @SpyBean in Spring Boot testing?",
    "answer": "@MockBean creates a mock of a Spring bean and replaces the existing bean in the application context, useful for isolating dependencies in tests. @SpyBean creates a spy, allowing real method calls while still being able to verify and stub methods selectively."
  },
  {
    "id": 218,
    "category": "Spring",
    "question": "How do you implement pagination in Spring Data JPA?",
    "answer": "Pagination in Spring Data JPA can be implemented using the Pageable interface and Page<T> return type in repository methods. You can pass page number, size, and sorting parameters to the repository method to fetch paginated results efficiently."
  },
  {
    "id": 219,
    "category": "Spring",
    "question": "What is the difference between CrudRepository and JpaRepository?",
    "answer": "CrudRepository provides basic CRUD operations like save, findAll, findById, and delete. JpaRepository extends CrudRepository and adds JPA-specific methods like flushing, batch deletes, and support for pagination and sorting. JpaRepository is preferred when using JPA for database access."
  },
  {
    "id": 220,
    "category": "Spring",
    "question": "What is Spring Boot DevTools Live Reload?",
    "answer": "Spring Boot DevTools Live Reload automatically refreshes the browser when code changes are detected during development. It improves developer productivity by reducing manual restarts and browser refreshes, and it works with IDEs and supported browsers using the LiveReload protocol."
  },
  {
    "id": 221,
    "category": "Spring",
    "question": "What is the difference between application.properties and application.yml?",
    "answer": "Both files are used for external configuration in Spring Boot. application.properties uses key-value pairs, while application.yml uses a hierarchical structure with indentation for readability and grouping related properties. YAML is more expressive and easier to read for complex configurations."
  },
  {
    "id": 222,
    "category": "Spring",
    "question": "How do you secure a REST API in Spring Boot?",
    "answer": "You can secure REST APIs in Spring Boot using Spring Security. Techniques include HTTP Basic authentication, JWT tokens, OAuth2, method-level security with @PreAuthorize and @RolesAllowed, and securing endpoints through configuration of WebSecurityConfigurerAdapter or SecurityFilterChain."
  },
  {
    "id": 223,
    "category": "Spring",
    "question": "What is the difference between @EnableWebSecurity and @SpringBootApplication?",
    "answer": "@EnableWebSecurity enables Spring Security’s web security features and allows configuration of authentication and authorization rules. @SpringBootApplication is a meta-annotation for bootstrapping the Spring Boot application. They serve different purposes; one is security-focused, the other is application startup."
  },
  {
    "id": 224,
    "category": "Spring",
    "question": "What is the difference between @Component, @Service, and @Repository in Spring Boot?",
    "answer": "All three annotations mark a class as a Spring-managed bean. @Component is generic, @Service is used for service layer components, and @Repository is used for data access layer components with exception translation. They provide semantic clarity and may trigger additional Spring features specific to the layer."
  },
  {
    "id": 225,
    "category": "Spring",
    "question": "How do you call a REST API from a Spring Boot application?",
    "answer": "You can call REST APIs using Spring’s RestTemplate or WebClient. RestTemplate is synchronous and easier for simple calls, while WebClient (introduced in Spring WebFlux) is reactive and supports asynchronous, non-blocking calls suitable for high-performance applications."
  },
  {
    "id": 226,
    "category": "Spring",
    "question": "What is Spring Boot WebFlux?",
    "answer": "Spring Boot WebFlux is a reactive web framework that supports asynchronous and non-blocking I/O. It uses Project Reactor and is designed for high-throughput, event-driven applications. Controllers use @RestController and return Mono or Flux types for reactive streams."
  },
  {
    "id": 227,
    "category": "Spring",
    "question": "What is the difference between @SpringBootTest and @WebMvcTest?",
    "answer": "@SpringBootTest loads the full application context and is used for integration testing. @WebMvcTest loads only the web layer (controllers, filters, and related components) and is used for testing controller behavior without starting the full application context."
  },
  {
    "id": 228,
    "category": "Spring",
    "question": "How do you handle CORS in Spring Boot?",
    "answer": "CORS (Cross-Origin Resource Sharing) can be handled in Spring Boot using @CrossOrigin on controller classes or methods. It can also be configured globally using WebMvcConfigurer with addCorsMappings() to allow specific origins, headers, and methods."
  },
  {
    "id": 229,
    "category": "Spring",
    "question": "What is the difference between synchronous and asynchronous REST calls in Spring Boot?",
    "answer": "Synchronous REST calls block the calling thread until a response is received, typical with RestTemplate. Asynchronous calls return immediately, allowing other tasks to execute while waiting for a response, and are supported by WebClient in reactive applications."
  },
  {
    "id": 230,
    "category": "Spring",
    "question": "How can you enable caching in Spring Boot?",
    "answer": "Caching can be enabled using @EnableCaching at the configuration level and @Cacheable, @CachePut, or @CacheEvict on methods. Spring Boot supports multiple cache providers, such as EhCache, Redis, and Caffeine, to improve performance by storing frequently accessed data in memory."
  },
  {
    "id": 231,
    "category": "Microservices",
    "question": "What are Microservices?",
    "answer": "Microservices are an architectural style in which a large application is divided into smaller, independent services, each responsible for a specific business capability. Each service can be developed, deployed, and scaled independently, promoting flexibility, maintainability, and faster delivery."
  },
  {
    "id": 232,
    "category": "Microservices",
    "question": "What is the difference between Monolithic and Microservices architecture?",
    "answer": "A monolithic architecture is a single, tightly coupled application where all components are deployed together. Microservices architecture splits the application into independent services that communicate via APIs, allowing independent development, deployment, and scaling. Microservices improve modularity, fault isolation, and agility compared to monolithic systems."
  },
  {
    "id": 233,
    "category": "Microservices",
    "question": "What are the advantages of Microservices?",
    "answer": "Advantages include independent deployment of services, easier scalability, fault isolation, technology diversity (different languages or databases per service), faster development cycles, better maintainability, and improved team autonomy."
  },
  {
    "id": 234,
    "category": "Microservices",
    "question": "What are the challenges of Microservices architecture?",
    "answer": "Challenges include increased complexity in communication between services, distributed system management, data consistency issues, transaction management across services, service discovery, monitoring, deployment orchestration, and debugging in a distributed environment."
  },
  {
    "id": 235,
    "category": "Microservices",
    "question": "What is Service Discovery in Microservices?",
    "answer": "Service Discovery is the process of automatically detecting network locations of service instances in a microservices architecture. It allows services to find and communicate with each other dynamically. Tools like Netflix Eureka, Consul, and Zookeeper are commonly used for service discovery."
  },
  {
    "id": 236,
    "category": "Microservices",
    "question": "What is API Gateway in Microservices?",
    "answer": "An API Gateway is a server that acts as a single entry point for client requests to multiple microservices. It handles request routing, load balancing, authentication, rate limiting, caching, and monitoring. Popular API Gateway tools include Netflix Zuul, Spring Cloud Gateway, and Kong."
  },
  {
    "id": 237,
    "category": "Microservices",
    "question": "What is the difference between synchronous and asynchronous communication in Microservices?",
    "answer": "Synchronous communication occurs when a service calls another and waits for a response, typically via REST or HTTP. Asynchronous communication does not block the caller; messages are sent via queues or messaging systems like RabbitMQ, Kafka, or JMS, allowing more resilient and decoupled interactions."
  },
  {
    "id": 238,
    "category": "Microservices",
    "question": "What is Circuit Breaker in Microservices?",
    "answer": "A Circuit Breaker is a design pattern that prevents cascading failures in distributed systems by stopping calls to a failing service. It monitors service health and opens the circuit when failures exceed a threshold, allowing fallback mechanisms until the service recovers. Netflix Hystrix and Resilience4j are common implementations."
  },
  {
    "id": 239,
    "category": "Microservices",
    "question": "What is the difference between Monolithic Transactions and Microservices Transactions?",
    "answer": "In a monolithic application, transactions are usually ACID and managed centrally. In microservices, transactions are distributed across multiple services, requiring patterns like Saga or two-phase commit (2PC) to maintain data consistency. Distributed transactions are more complex but necessary for service independence."
  },
  {
    "id": 240,
    "category": "Microservices",
    "question": "What is the Saga pattern in Microservices?",
    "answer": "The Saga pattern is a method for managing distributed transactions across multiple microservices. It breaks a transaction into a series of local transactions with compensating actions for rollback in case of failure. It ensures eventual consistency without relying on a centralized transaction manager."
  },
  {
    "id": 241,
    "category": "Microservices",
    "question": "What is the difference between Event-Driven and Request-Response Microservices?",
    "answer": "Request-Response microservices communicate synchronously, waiting for a response to proceed. Event-Driven microservices communicate asynchronously by publishing and subscribing to events via message brokers like Kafka, RabbitMQ, or ActiveMQ, allowing decoupled, scalable, and reactive systems."
  },
  {
    "id": 242,
    "category": "Microservices",
    "question": "What is the role of Docker in Microservices?",
    "answer": "Docker is used to containerize microservices, providing lightweight, portable, and isolated environments for each service. It ensures consistency across development, testing, and production environments, simplifies deployment, and works well with orchestration tools like Kubernetes for scaling and management."
  },
  {
    "id": 243,
    "category": "Microservices",
    "question": "What is Kubernetes and its role in Microservices?",
    "answer": "Kubernetes is a container orchestration platform that automates deployment, scaling, and management of containerized applications. In microservices, Kubernetes manages service instances, load balancing, rolling updates, self-healing, and networking between services, enabling highly scalable and resilient systems."
  },
  {
    "id": 244,
    "category": "Microservices",
    "question": "What is the difference between API Gateway and Service Mesh?",
    "answer": "An API Gateway is the entry point for client requests to microservices, handling routing, authentication, and rate limiting. A Service Mesh manages internal service-to-service communication, including load balancing, service discovery, encryption, and observability, typically using sidecar proxies like Istio or Linkerd."
  },
  {
    "id": 245,
    "category": "Microservices",
    "question": "What is the difference between Synchronous REST API and gRPC in Microservices?",
    "answer": "REST APIs use HTTP and JSON for communication, are human-readable, and widely supported but can be slower due to parsing overhead. gRPC uses HTTP/2 and Protocol Buffers for binary serialization, offering better performance, smaller payloads, bi-directional streaming, and stronger typing, making it suitable for high-performance microservices."
  },
  {
    "id": 246,
    "category": "Microservices",
    "question": "What is the difference between Stateful and Stateless Microservices?",
    "answer": "Stateless microservices do not store client-specific data between requests; all required information is passed with each request. Stateful microservices maintain state between requests, often requiring sticky sessions or external state storage. Stateless services are easier to scale horizontally."
  },
  {
    "id": 247,
    "category": "Microservices",
    "question": "What is Distributed Tracing in Microservices?",
    "answer": "Distributed tracing is a technique to track requests as they flow through multiple microservices, providing visibility into latency, bottlenecks, and errors. Tools like Zipkin, Jaeger, and OpenTelemetry are commonly used to collect trace data and visualize end-to-end request flows."
  },
  {
    "id": 248,
    "category": "Microservices",
    "question": "What is the difference between Monolithic Logging and Microservices Logging?",
    "answer": "In monolithic applications, logging is centralized and straightforward. In microservices, logging must handle multiple services and containers, often requiring centralized logging solutions like ELK stack (Elasticsearch, Logstash, Kibana) or Fluentd for aggregation, correlation, and analysis."
  },
  {
    "id": 249,
    "category": "Microservices",
    "question": "What are the best practices for building Microservices?",
    "answer": "Best practices include: design services around business capabilities, keep services small and focused, maintain statelessness, use API contracts, implement service discovery, logging, monitoring, and health checks, manage distributed transactions carefully, apply security at service boundaries, and containerize for portability and scalability."
  },
  {
    "id": 250,
    "category": "Microservices",
    "question": "What is the difference between API Versioning strategies in Microservices?",
    "answer": "API versioning can be done via URL versioning (/v1/resource), query parameters (?version=1), custom headers (X-API-Version: 1), or content negotiation (Accept header). Proper versioning ensures backward compatibility, smooth upgrades, and allows multiple clients to coexist without breaking changes."
  },
  {
    "id": 251,
    "category": "Microservices",
    "question": "What is the difference between API Gateway and Backend-for-Frontend (BFF) pattern?",
    "answer": "An API Gateway serves as a single entry point for all clients, handling routing, security, and rate limiting. The Backend-for-Frontend (BFF) pattern creates specialized backends for different clients (e.g., web, mobile) to optimize API responses for each frontend, improving performance and reducing client-side processing."
  },
  {
    "id": 252,
    "category": "Microservices",
    "question": "What is CQRS (Command Query Responsibility Segregation) in Microservices?",
    "answer": "CQRS is a pattern that separates read operations (queries) from write operations (commands). It allows optimizing read and write workloads independently, improving performance, scalability, and maintainability in microservices by using different models or databases for reads and writes."
  },
  {
    "id": 253,
    "category": "Microservices",
    "question": "What is Event Sourcing in Microservices?",
    "answer": "Event Sourcing is a pattern where state changes in a microservice are stored as a sequence of events rather than updating the current state directly. This allows reconstructing the current state at any time, provides a complete audit trail, and integrates well with CQRS for reactive systems."
  },
  {
    "id": 254,
    "category": "Microservices",
    "question": "What is the difference between Synchronous and Asynchronous Event-Driven Microservices?",
    "answer": "Synchronous event-driven microservices wait for an event response before proceeding, typically using HTTP callbacks. Asynchronous event-driven microservices publish events and continue execution without waiting, using message brokers like Kafka or RabbitMQ. Asynchronous approaches improve scalability and decouple services."
  },
  {
    "id": 255,
    "category": "Microservices",
    "question": "What is the role of a Message Broker in Microservices?",
    "answer": "A Message Broker enables asynchronous communication between microservices by handling message queuing, routing, and delivery. It decouples services, ensures reliability, and supports patterns like publish-subscribe and point-to-point messaging. Examples include RabbitMQ, Apache Kafka, and ActiveMQ."
  },
  {
    "id": 256,
    "category": "Microservices",
    "question": "What is the difference between Event-Driven Microservices and REST-based Microservices?",
    "answer": "REST-based microservices communicate synchronously via HTTP, requiring the caller to wait for a response. Event-driven microservices communicate asynchronously by publishing and subscribing to events, improving decoupling, scalability, and resilience. Event-driven systems are better for high-throughput, reactive architectures."
  },
  {
    "id": 257,
    "category": "Microservices",
    "question": "What are the common patterns for handling failures in Microservices?",
    "answer": "Common patterns include Circuit Breaker (stops calls to failing services), Retry (retries failed requests), Timeout (limits waiting for response), Bulkhead (isolates failing components), Fallback (provides default response), and Rate Limiting (controls traffic load). These patterns improve reliability and fault tolerance."
  },
  {
    "id": 258,
    "category": "Microservices",
    "question": "What is the difference between Saga and Two-Phase Commit in Microservices?",
    "answer": "Saga is a distributed transaction pattern using a series of local transactions with compensating actions to maintain eventual consistency. Two-Phase Commit (2PC) is a protocol that locks resources and ensures ACID transactions across services, but it is slower, less scalable, and can block services during failures. Saga is preferred in modern microservices."
  },
  {
    "id": 259,
    "category": "Microservices",
    "question": "What is the role of Observability in Microservices?",
    "answer": "Observability is the ability to understand a system’s internal state by examining outputs like logs, metrics, and traces. In microservices, it helps monitor health, detect failures, analyze performance, and debug issues in distributed systems using tools like Prometheus, Grafana, ELK stack, Zipkin, or Jaeger."
  },
  {
    "id": 260,
    "category": "Microservices",
    "question": "What is the difference between Logging, Monitoring, and Tracing in Microservices?",
    "answer": "Logging records events and errors for later analysis. Monitoring collects metrics about system performance and health in real time. Tracing tracks the flow of requests across multiple microservices, providing insights into latency, bottlenecks, and failures. Together, they ensure effective observability."
  },
  {
    "id": 261,
    "category": "Microservices",
    "question": "What is the difference between Synchronous REST, gRPC, and GraphQL in Microservices?",
    "answer": "REST uses HTTP and JSON, is widely supported, and is simple but can be chatty. gRPC uses HTTP/2 and Protocol Buffers, offering faster binary communication, streaming, and strong typing. GraphQL allows clients to query only the required data, reducing over-fetching and under-fetching, suitable for flexible client requirements."
  },
  {
    "id": 262,
    "category": "Microservices",
    "question": "What is the difference between Monolithic Deployment and Microservices Deployment?",
    "answer": "Monolithic deployment deploys the entire application as a single unit. Microservices deployment involves deploying each service independently, often in containers, allowing independent scaling, updates, and fault isolation. Microservices deployment is more flexible but requires orchestration tools like Kubernetes."
  },
  {
    "id": 263,
    "category": "Microservices",
    "question": "What is Blue-Green Deployment in Microservices?",
    "answer": "Blue-Green Deployment is a strategy to reduce downtime and risk during deployments. Two identical production environments (blue and green) are maintained. The new version is deployed to the idle environment, tested, and traffic is switched from the old to the new version once validated, ensuring smooth updates."
  },
  {
    "id": 264,
    "category": "Microservices",
    "question": "What is Canary Deployment in Microservices?",
    "answer": "Canary Deployment releases a new service version to a small subset of users before rolling it out fully. It allows testing the new version in production with minimal risk, monitors performance, and rolls back if issues occur, improving reliability during incremental releases."
  },
  {
    "id": 265,
    "category": "Microservices",
    "question": "What is the difference between Service Orchestration and Service Choreography?",
    "answer": "Service Orchestration centralizes control with a coordinator service managing workflow execution across services. Service Choreography is decentralized; each service reacts to events and triggers actions independently. Orchestration offers predictable flows, while Choreography promotes decoupling and scalability."
  },
  {
    "id": 266,
    "category": "Microservices",
    "question": "What is the difference between Horizontal Scaling and Vertical Scaling in Microservices?",
    "answer": "Horizontal scaling involves adding more instances of a service to handle increased load, improving redundancy and fault tolerance. Vertical scaling involves adding more resources (CPU, memory) to a single instance. Horizontal scaling is preferred for microservices due to independence and cloud-native design."
  },
  {
    "id": 267,
    "category": "Microservices",
    "question": "What is the difference between API Gateway and Sidecar pattern?",
    "answer": "API Gateway manages external client requests, routing, authentication, and rate limiting. The Sidecar pattern deploys auxiliary components alongside each service instance to handle cross-cutting concerns like logging, monitoring, or service discovery internally, improving modularity and maintainability."
  },
  {
    "id": 268,
    "category": "Microservices",
    "question": "What is the role of Configuration Server in Microservices?",
    "answer": "A Configuration Server centralizes and manages external configuration for multiple microservices, allowing dynamic updates without redeploying services. Tools like Spring Cloud Config or Consul store configuration in Git or a database and provide secure, consistent, and versioned configuration across environments."
  },
  {
    "id": 269,
    "category": "Microservices",
    "question": "What is the difference between Stateless and Stateful Authentication in Microservices?",
    "answer": "Stateless authentication, such as JWT tokens, does not store session data on the server, making services easier to scale horizontally. Stateful authentication stores session information on the server or database, requiring sticky sessions and making scaling more complex."
  },
  {
    "id": 270,
    "category": "Microservices",
    "question": "What are the common tools for Microservices monitoring and logging?",
    "answer": "Common tools include Prometheus (metrics), Grafana (visualization), ELK Stack (Elasticsearch, Logstash, Kibana for logs), Zipkin and Jaeger (distributed tracing), New Relic, Datadog, and Spring Boot Actuator for health checks and monitoring application metrics."
  },
  {
    "id": 291,
    "category": "Microservices",
    "question": "Your microservice is experiencing high latency during peak traffic. How would you investigate and solve this?",
    "answer": "First, enable distributed tracing using tools like Zipkin or Jaeger to identify which service calls are slow. Check metrics and logs to pinpoint bottlenecks, such as database queries or third-party API calls. Apply caching where appropriate, optimize queries, introduce asynchronous processing or message queues, and consider horizontal scaling of the affected services."
  },
  {
    "id": 292,
    "category": "Microservices",
    "question": "One of your microservices is failing intermittently, causing cascading failures. What would you do?",
    "answer": "Implement a Circuit Breaker pattern using Resilience4j or Netflix Hystrix to prevent cascading failures. Introduce retries with exponential backoff for transient failures, monitor service health, and implement fallback methods. Analyze logs to identify root causes and scale the service if resource constraints are causing failures."
  },
  {
    "id": 293,
    "category": "Microservices",
    "question": "How would you handle data consistency across multiple microservices during a transaction?",
    "answer": "Use the Saga pattern to manage distributed transactions by breaking a transaction into a sequence of local transactions with compensating actions if something fails. Alternatively, event-driven approaches with eventual consistency can be applied. Avoid using distributed ACID transactions unless absolutely necessary, as they can impact performance."
  },
  {
    "id": 294,
    "category": "Microservices",
    "question": "A client reports that the API response is inconsistent across multiple microservice instances. How would you debug this?",
    "answer": "First, check if load balancers are distributing requests correctly. Verify that all service instances have the same configuration and are connected to the correct database or cache. Investigate caching layers or replication lag in databases. Add request tracing to see which instance handled which request and ensure eventual consistency in distributed data."
  },
  {
    "id": 295,
    "category": "Microservices",
    "question": "Your service depends on a third-party API that sometimes fails. How would you ensure reliability?",
    "answer": "Implement retries with exponential backoff for transient errors. Use a Circuit Breaker to prevent overwhelming the service when the API is down. Implement caching of previously fetched responses and provide fallback responses when the API is unavailable. Monitor API failures and alert the team for long-term issues."
  },
  {
    "id": 296,
    "category": "Microservices",
    "question": "A microservice consumes too much memory and crashes under heavy load. How would you address this?",
    "answer": "First, profile the application to identify memory leaks or inefficient data structures. Introduce proper garbage collection tuning and heap sizing. Use streaming or pagination for large data sets. Consider horizontal scaling by deploying additional service instances behind a load balancer and implement rate limiting to prevent overload."
  },
  {
    "id": 297,
    "category": "Microservices",
    "question": "Your microservices require frequent configuration changes. How would you handle this efficiently?",
    "answer": "Use a centralized configuration management tool like Spring Cloud Config or Consul. Store configuration in Git or a database, version it, and enable dynamic refresh of configuration without redeploying services. Apply environment-specific profiles for different stages like development, testing, and production."
  },
  {
    "id": 298,
    "category": "Microservices",
    "question": "You notice that one microservice is slowing down other services due to synchronous calls. How would you refactor?",
    "answer": "Refactor synchronous calls to asynchronous communication using messaging systems like Kafka, RabbitMQ, or JMS. Introduce event-driven architecture for decoupled service interaction. Apply batching, caching, or parallel processing where possible. Use Circuit Breakers and timeouts to prevent one service from blocking others."
  },
  {
    "id": 299,
    "category": "Microservices",
    "question": "Multiple microservices need to share user authentication information. How would you implement this securely?",
    "answer": "Implement stateless authentication using JWT tokens, which carry user information and can be verified by all services without storing sessions. Alternatively, use OAuth2/OpenID Connect with a centralized authentication server. Ensure tokens are signed and optionally encrypted, and apply role-based access control in each service."
  },
  {
    "id": 300,
    "category": "Microservices",
    "question": "During a deployment, one microservice update breaks the system. How would you minimize impact in production?",
    "answer": "Use deployment strategies like Blue-Green Deployment or Canary Deployment to release the new version safely. Monitor service health during the rollout and rollback immediately if issues occur. Implement automated health checks and load balancer routing to redirect traffic to stable instances. Maintain backward-compatible APIs to avoid breaking clients."
  },
  {
    "id": 301,
    "category": "Java 8 Coding",
    "question": "Write a Java 8 program to find the second highest number in a list.",
    "answer": "List<Integer> list = Arrays.asList(10, 20, 35, 50, 50, 40);\nint secondHighest = list.stream()\n        .distinct()\n        .sorted(Comparator.reverseOrder())\n        .skip(1)\n        .findFirst()\n        .orElseThrow(() -> new RuntimeException(\"No second highest\"));\nSystem.out.println(secondHighest);"
  },
  {
    "id": 302,
    "category": "Java 8 Coding",
    "question": "Write a Java 8 program to remove duplicates from a list.",
    "answer": "List<Integer> list = Arrays.asList(10, 20, 20, 30, 40, 40);\nList<Integer> unique = list.stream()\n        .distinct()\n        .collect(Collectors.toList());\nSystem.out.println(unique);"
  },
  {
    "id": 303,
    "category": "Java 8 Coding",
    "question": "Write a Java 8 program to find the frequency of each character in a string.",
    "answer": "String str = \"banana\";\nMap<Character, Long> freq = str.chars()\n        .mapToObj(c -> (char) c)\n        .collect(Collectors.groupingBy(c -> c, Collectors.counting()));\nSystem.out.println(freq);"
  },
  {
    "id": 304,
    "category": "Java 8 Coding",
    "question": "Find the first non-repeating character in a string using Java 8.",
    "answer": "String str = \"swiss\";\nCharacter firstNonRepeat = str.chars()\n        .mapToObj(c -> (char) c)\n        .collect(Collectors.groupingBy(c -> c, LinkedHashMap::new, Collectors.counting()))\n        .entrySet()\n        .stream()\n        .filter(entry -> entry.getValue() == 1)\n        .map(Map.Entry::getKey)\n        .findFirst()\n        .orElse(null);\nSystem.out.println(firstNonRepeat);"
  },
  {
    "id": 305,
    "category": "Java 8 Coding",
    "question": "Convert a list of strings to uppercase using Java 8 streams.",
    "answer": "List<String> names = Arrays.asList(\"john\", \"mike\", \"smith\");\nList<String> upper = names.stream()\n        .map(String::toUpperCase)\n        .collect(Collectors.toList());\nSystem.out.println(upper);"
  },
  {
    "id": 306,
    "category": "Java 8 Coding",
    "question": "Sort a list of employees by salary using Java 8.",
    "answer": "List<Employee> employees = getEmployees();\nList<Employee> sorted = employees.stream()\n        .sorted(Comparator.comparing(Employee::getSalary))\n        .collect(Collectors.toList());"
  },
  {
    "id": 307,
    "category": "Java 8 Coding",
    "question": "Find duplicate elements from a list using Java 8.",
    "answer": "List<Integer> list = Arrays.asList(10, 20, 20, 30, 30, 40);\nSet<Integer> seen = new HashSet<>();\nList<Integer> duplicates = list.stream()\n        .filter(i -> !seen.add(i))\n        .collect(Collectors.toList());\nSystem.out.println(duplicates);"
  },
  {
    "id": 308,
    "category": "Java 8 Coding",
    "question": "Join a list of strings using commas.",
    "answer": "List<String> list = Arrays.asList(\"Java\", \"Spring\", \"Microservices\");\nString result = String.join(\", \", list);\nSystem.out.println(result);"
  },
  {
    "id": 309,
    "category": "Java 8 Coding",
    "question": "Convert a list of objects to a map using Java 8.",
    "answer": "Map<Integer, String> map = employees.stream()\n        .collect(Collectors.toMap(Employee::getId, Employee::getName));"
  },
  {
    "id": 310,
    "category": "Java 8 Coding",
    "question": "Find the maximum value from a list using Java 8.",
    "answer": "List<Integer> list = Arrays.asList(10, 50, 30);\nint max = list.stream()\n        .max(Integer::compareTo)\n        .orElseThrow();\nSystem.out.println(max);"
  },
  {
    "id": 311,
    "category": "Java 8 Coding",
    "question": "Filter even numbers from a list using Java 8.",
    "answer": "List<Integer> even = list.stream()\n        .filter(n -> n % 2 == 0)\n        .collect(Collectors.toList());"
  },
  {
    "id": 312,
    "category": "Java 8 Coding",
    "question": "Find the sum of all numbers in a list using reduce().",
    "answer": "int sum = list.stream()\n        .reduce(0, Integer::sum);\nSystem.out.println(sum);"
  },
  {
    "id": 313,
    "category": "Java 8 Coding",
    "question": "Find the longest string from a list.",
    "answer": "String longest = list.stream()\n        .max(Comparator.comparing(String::length))\n        .orElse(\"\");\nSystem.out.println(longest);"
  },
  {
    "id": 314,
    "category": "Java 8 Coding",
    "question": "Write a parallel stream example to sum all integers.",
    "answer": "int total = list.parallelStream()\n        .mapToInt(x -> x)\n        .sum();\nSystem.out.println(total);"
  },
  {
    "id": 315,
    "category": "Java 8 Coding",
    "question": "Check if a string contains only digits using Java 8.",
    "answer": "String str = \"12345\";\nboolean result = str.chars().allMatch(Character::isDigit);\nSystem.out.println(result);"
  },[
  {
    "id": 316,
    "category": "Java 17",
    "question": "What is Java 17 and why is it important?",
    "answer": "Java 17 is a Long-Term Support (LTS) release of the Java platform, released in September 2021. LTS releases are supported for many years and are recommended for production systems. Java 17 bundles all improvements from Java 9 to 16, including modules, records, sealed classes, pattern matching for instanceof, text blocks, and enhanced garbage collectors. Many organizations plan migrations specifically to LTS versions like Java 11 and Java 17."
  },
  {
    "id": 317,
    "category": "Java 17",
    "question": "What are the main language features added between Java 8 and Java 17?",
    "answer": "Key language features introduced between Java 8 and Java 17 include: modules (Java 9), local-variable type inference with 'var' (Java 10), text blocks (Java 15), records (Java 16), pattern matching for 'instanceof' (Java 16), and sealed classes (Java 17). Switch expressions became standard in Java 14. Together these features improve code readability, conciseness, and safety."
  },
  {
    "id": 318,
    "category": "Java 17",
    "question": "What is a record in Java 17?",
    "answer": "A record is a special kind of class introduced to model immutable data as a transparent carrier for its state. When you declare a record, the compiler automatically generates a canonical constructor, private final fields, accessors, equals, hashCode, and toString. Records are declared using the 'record' keyword, for example: 'public record Point(int x, int y) {}'. They are ideal for DTOs, value objects, and simple data holders."
  },
  {
    "id": 319,
    "category": "Java 17",
    "question": "When should you use a record instead of a class in Java 17?",
    "answer": "Use a record when your type is mainly a data carrier whose identity is defined entirely by its state. The data is usually immutable, and you want generated implementations of equals, hashCode, and toString. If the type has complex behavior, mutable state, or inheritance requirements, a regular class or interface may be more appropriate. Records cannot extend other classes and are implicitly final."
  },
  {
    "id": 320,
    "category": "Java 17",
    "question": "What are sealed classes and interfaces in Java 17?",
    "answer": "Sealed classes and interfaces restrict which other classes or interfaces can extend or implement them. A sealed type uses the 'sealed' keyword and a 'permits' clause to list permitted subclasses. Those subclasses must be either final, non-sealed, or sealed themselves. This feature allows better control over inheritance hierarchies, supports exhaustive pattern matching, and improves maintainability and security."
  },
  {
    "id": 321,
    "category": "Java 17",
    "question": "Explain pattern matching for 'instanceof' in Java 17.",
    "answer": "Pattern matching for 'instanceof' lets you test a type and cast it in a single step. Instead of 'if (obj instanceof String) { String s = (String) obj; ... }', you can write 'if (obj instanceof String s) { ... }'. The variable 's' is automatically defined in the true branch, avoiding explicit casting. This makes code more concise and reduces the risk of ClassCastException."
  },
  {
    "id": 322,
    "category": "Java 17",
    "question": "What are switch expressions, and how do they differ from traditional switch statements?",
    "answer": "Switch expressions allow 'switch' to return a value, using the '->' syntax and 'yield'. Unlike traditional switch statements, switch expressions are exhaustive and do not require fall-through by default. For example: 'int result = switch (day) { case MONDAY, FRIDAY -> 6; default -> 8; };'. This leads to more concise and less error-prone branching logic."
  },
  {
    "id": 323,
    "category": "Java 17",
    "question": "What are text blocks in Java and why are they useful?",
    "answer": "Text blocks are multi-line string literals introduced to make it easier to represent large chunks of text like JSON, SQL, or HTML. They use triple quotes: 'String json = \"\"\"{\\n  \\\"key\\\": \\\"value\\\"\\n}\"\"\";'. Text blocks reduce the need for manual escaping and string concatenation, resulting in more readable and maintainable code."
  },
  {
    "id": 324,
    "category": "Java 17",
    "question": "What are helpful NullPointerException messages and how do they help developers?",
    "answer": "From Java 14 onwards, NullPointerException messages include more detailed information about which variable or expression was null. Instead of a generic 'NullPointerException', the message identifies the part of the line that evaluated to null. This greatly speeds up debugging, as developers can immediately see which dereference caused the issue in complex expressions."
  },
  {
    "id": 325,
    "category": "Java 17",
    "question": "How does Java 17 handle access to JDK internal APIs?",
    "answer": "Java 17 strongly encapsulates most JDK internal APIs by default. This means reflection-based access to internal packages is restricted unless explicitly opened using command-line options like '--add-opens'. Code that relied on 'sun.*' or other internal packages may break when migrating, so the recommended approach is to move to supported, public APIs."
  },
  {
    "id": 326,
    "category": "Java 17",
    "question": "What garbage collectors are available in Java 17?",
    "answer": "In Java 17, several garbage collectors are available: Serial GC, Parallel GC, G1 GC (the default), ZGC, and Shenandoah (depending on distribution). G1 is a server-style low-pause collector suitable for most applications. ZGC and Shenandoah are designed for very low pause times and large heaps. You can select a GC with JVM flags like '-XX:+UseG1GC' or '-XX:+UseZGC'."
  },
  {
    "id": 327,
    "category": "Java 17",
    "question": "How do sealed classes work together with pattern matching?",
    "answer": "Sealed classes restrict the set of subclasses, which allows the compiler to know all possible types in a hierarchy. This combines well with pattern matching in 'instanceof' and future pattern matching features in 'switch'. The compiler can check exhaustiveness, ensuring all permitted subclasses are handled. This results in safer and more maintainable polymorphic code."
  },
  {
    "id": 328,
    "category": "Java 17",
    "question": "What are the key considerations when migrating from Java 8 to Java 17?",
    "answer": "When migrating from Java 8 to 17, you must review: module system impact, encapsulation of internal APIs, removed or deprecated APIs, and third-party library compatibility. Build and deployment tools (Maven, Gradle, application servers) need to support Java 17. You can gradually migrate by first compiling and running on Java 17 without using new features, then incrementally adopting features like modules, records, and new GCs."
  },
  {
    "id": 329,
    "category": "Java 17",
    "question": "Does pattern matching for 'instanceof' improve performance or just readability?",
    "answer": "Pattern matching for 'instanceof' primarily improves readability and reduces boilerplate code by combining type checking and casting. In most cases, performance is similar to traditional 'instanceof' plus cast, because the JVM performs similar optimizations. The real benefit is cleaner and less error-prone code, which can indirectly lead to fewer bugs and easier maintenance."
  },
  {
    "id": 330,
    "category": "Java 17",
    "question": "How can records and sealed classes be used together to model domain hierarchies?",
    "answer": "You can define a sealed interface or abstract class and have its permitted implementations be records. For example, 'public sealed interface Shape permits Circle, Rectangle {}' and 'public record Circle(double radius) implements Shape {}'. This combination gives you immutable, data-focused types with a closed set of subtypes. It is similar to algebraic data types in functional languages and works well with pattern matching."
  },
  {
    "id": 331,
    "category": "Java 17",
    "question": "What is the impact of strong encapsulation on frameworks that use reflection?",
    "answer": "Frameworks that rely on reflection to access JDK internals or private members may fail under strong encapsulation. For example, libraries that used 'sun.misc.Unsafe' or accessed private fields of core classes can break. Many mainstream frameworks (like Spring and Hibernate) have been updated to avoid such access or use '--add-opens' where necessary. Application owners should run tests on Java 17 and adjust JVM options or upgrade dependencies."
  },
  {
    "id": 332,
    "category": "Java 17",
    "question": "What changes related to the Security Manager are relevant in Java 17?",
    "answer": "In Java 17, the Security Manager is deprecated for removal. Historically, it was used to enforce security policies at runtime, especially in applet and sandbox environments. As those use cases have largely disappeared and modern deployment models use other security mechanisms, the Security Manager is considered obsolete. New applications are encouraged not to rely on it."
  },
  {
    "id": 333,
    "category": "Java 17",
    "question": "How does Java 17 support packaging and distribution of applications?",
    "answer": "Java 17 supports tools like 'jlink' and 'jpackage' (introduced in earlier versions) to build custom runtime images and native installers. 'jlink' lets you create a minimized runtime that includes only the modules your app needs, reducing size and attack surface. 'jpackage' can produce platform-specific installers (such as .msi or .dmg), simplifying deployment to end users."
  },
  {
    "id": 334,
    "category": "Java 17",
    "question": "What is the role of the module system in Java 17?",
    "answer": "The module system, introduced in Java 9 and available in Java 17, organizes code into named modules with explicit dependencies. It improves encapsulation by allowing you to export only selected packages and hide internal APIs. The module system also enables tools like 'jlink' to build custom runtimes. While not mandatory for all applications, modularization is recommended for large code bases and library authors."
  },
  {
    "id": 335,
    "category": "Java 17",
    "question": "How does Java 17 improve startup and performance compared to older versions?",
    "answer": "Java 17 includes many performance improvements accumulated over releases: better JIT optimizations, enhanced G1 GC, optional low-latency GCs like ZGC and Shenandoah, and class-data sharing improvements. These changes reduce memory footprint, improve throughput, and lower pauses. In real-world benchmarks, Java 17 typically outperforms Java 8 and 11 for the same application, often without code changes."
  }
]









  ];

  const categories = ['All', ...new Set(questions.map(q => q.category))];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleQuestion = (id) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };

  const expandAll = () => {
    setExpandedQuestions(new Set(filteredQuestions.map(q => q.id)));
  };

  const collapseAll = () => {
    setExpandedQuestions(new Set());
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="header">
          <h1 className="title">☕ Java Developer Interview Questions</h1>
          <p className="subtitle">Master your Java interview preparation</p>
        </div>

        {/* Controls */}
        <div className="controls-card">
          {/* Search Bar */}
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search questions or answers..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter and Actions */}
          <div className="filter-actions">
            <div className="category-filters">
              <span className="filter-icon">🏷️</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="action-buttons">
              <button onClick={expandAll} className="expand-btn">
                Expand All
              </button>
              <button onClick={collapseAll} className="collapse-btn">
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count">
          Showing {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''}
        </div>

        {/* Questions List */}
        <div className="questions-list">
          {filteredQuestions.map((q, index) => (
            <div key={q.id} className="question-card">
              <button
                onClick={() => toggleQuestion(q.id)}
                className="question-header"
              >
                <div className="question-content">
                  <div className="question-meta">
                    <span className="category-badge">{q.category}</span>
                    <span className="question-number">Q{index + 1}</span>
                  </div>
                  <h3 className="question-text">{q.question}</h3>
                </div>
                <div className="chevron">
                  {expandedQuestions.has(q.id) ? '▲' : '▼'}
                </div>
              </button>
              
              {expandedQuestions.has(q.id) && (
                <div className="answer-section">
                  <div className="answer-box">
                    <p className="answer-label">Answer:</p>
                    <p className="answer-text">{q.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="no-results">
            <p>No questions found matching your criteria.</p>
          </div>
        )}

        {/* Footer */}
        <div className="footer">
          <p>💡 Click on any question to reveal the answer</p>
          <p>Good luck with your interview preparation! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default JavaInterviewApp;